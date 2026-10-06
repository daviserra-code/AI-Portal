import { PolicyPage, policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("ai-policy");

export default function Page() {
  return <PolicyPage slug="ai-policy" />;
}
