import { agencyMetadata } from "@/components/agency/shared";

// The contact page is a client component, so its metadata lives here
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return agencyMetadata(locale, "Contact", "/contact");
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
