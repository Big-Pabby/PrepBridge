import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about PrepBridge's GCSE and JAMB programs, admissions, fees, learning approach, and student support.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "PrepBridge - Frequently Asked Questions",
    description:
      "Find answers to questions about PrepBridge's programs, admissions, and learning approach.",
    url: "/faq",
    type: "website",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
