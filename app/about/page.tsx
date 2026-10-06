import { PolicyPage, policyMetadata } from "@/components/PolicyPage";

export const metadata = policyMetadata("about");

export default function Page() {
  return <PolicyPage slug="about" />;
}
