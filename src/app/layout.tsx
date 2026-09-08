import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cinopseassociation.in"),
  title: {
    default: "Karnataka CINOPSE Association (KCA)",
    template: "%s | Karnataka CINOPSE Association",
  },
  description:
    "Karnataka CINOPSE Association (KCA) is a multidisciplinary academic and professional association integrating Cardiology, Neurology, Nephrology, Pulmonology, Metabolic Medicine and Sleep Medicine through evidence-based, precision-oriented healthcare.",
  keywords: [
    "Karnataka CINOPSE Association",
    "KCA",
    "multidisciplinary medical association Karnataka",
    "cardio neuro renal pulmonary metabolic sleep medicine",
    "CME association India",
    "CINOPSE India",
  ],
  authors: [{ name: "Karnataka CINOPSE Association" }],
  creator: "Karnataka CINOPSE Association",
  publisher: "Karnataka CINOPSE Association",
  openGraph: {
    title: "Karnataka CINOPSE Association (KCA)",
    description:
      "Connecting Specialties. Integrating Science. Improving Outcomes. A multidisciplinary academic and professional association for integrated, evidence-based healthcare.",
    url: "https://www.cinopseassociation.in",
    siteName: "Karnataka CINOPSE Association",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Karnataka CINOPSE Association (KCA)",
    description:
      "Connecting Specialties. Integrating Science. Improving Outcomes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
