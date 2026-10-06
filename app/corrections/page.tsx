import { PolicyPage, policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("corrections");

export default function Page() {
  return <PolicyPage slug="corrections" />;
}
