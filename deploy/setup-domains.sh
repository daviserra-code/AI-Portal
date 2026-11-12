#!/usr/bin/env bash
# One-time: publish ai-portal.si through the server's nginx and get HTTPS certificates.
# Run as root on the Hetzner server:
#   curl -fsSL https://raw.githubusercontent.com/daviserra-code/AI-Portal/main/deploy/setup-domains.sh | bash
# Safe to run again: it rewrites only the ai-portal site, checks nginx before reloading,
# and adds the www names to the certificate once their DNS records exist.
set -euo pipefail

IP=46.224.91.14
CONF=/etc/nginx/sites-available/ai-portal
NAMES="ai-portal.si www.ai-portal.si si-portal.si www.si-portal.si superintelligenceobservatory.cloud www.superintelligenceobservatory.cloud"

command -v nginx >/dev/null || { echo "nginx is not installed on this server; stopping."; exit 1; }
command -v certbot >/dev/null || { echo "certbot is not installed on this server; stopping."; exit 1; }
curl -fsS -o /dev/null http://127.0.0.1:3010/robots.txt || { echo "The ai-portal container is not answering on 127.0.0.1:3010; stopping."; exit 1; }

echo "Checking DNS:"
ready=()
for n in $NAMES; do
  got=$(getent ahostsv4 "$n" | awk 'NR==1{print $1}')
  if [ "$got" = "$IP" ]; then ready+=("$n"); echo "  ok       $n"; else echo "  not yet  $n (${got:-no record})"; fi
done
[ ${#ready[@]} -gt 0 ] || { echo "No domain points at $IP yet. Wait a few minutes and run this again."; exit 1; }

# Keep any earlier version, so a bad config can be put back.
[ -f "$CONF" ] && cp "$CONF" "$CONF.bak"
curl -fsSL https://raw.githubusercontent.com/daviserra-code/AI-Portal/main/deploy/nginx-ai-portal.conf -o "$CONF"
ln -sf "$CONF" /etc/nginx/sites-enabled/ai-portal
if ! nginx -t; then
  echo "nginx rejected the new site, putting things back as they were."
  if [ -f "$CONF.bak" ]; then mv "$CONF.bak" "$CONF"; else rm -f "$CONF" /etc/nginx/sites-enabled/ai-portal; fi
  exit 1
fi
systemctl reload nginx

args=(); for n in "${ready[@]}"; do args+=(-d "$n"); done
certbot --nginx --non-interactive --agree-tos --email info@ai-portal.si \
  --cert-name ai-portal.si --expand --redirect "${args[@]}"

echo
echo "Done. Checking from the server:"
for n in "${ready[@]}"; do
  printf '  https://%s -> %s\n' "$n" "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' --resolve "$n:443:127.0.0.1" "https://$n/")"
done
