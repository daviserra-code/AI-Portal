import { PolicyPage, policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("editorial-policy");

export default function Page() {
  return <PolicyPage slug="editorial-policy" />;
}
