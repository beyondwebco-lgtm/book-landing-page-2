import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thirtha Yatra — A Guide to Holy Temples and Thirtha Kshetras in India",
  description:
    "Thousands of temples. Sacred rivers. Ancient mountains. Stories of saints and rishis. A journey through the spiritual geography of Bharat by personal visits and documented heritage.",
  keywords: [
    "Thirtha Yatra",
    "Holy Temples India",
    "Thirtha Kshetras",
    "Sacred Bharat",
    "Indian Pilgrimage Guide",
    "Ancient Hindu Temples",
    "Spiritual Geography India",
  ],
  openGraph: {
    title: "Thirtha Yatra — A Guide to Holy Temples and Thirtha Kshetras in India",
    description:
      "A journey through the spiritual geography of Bharat. Collated through firsthand visits to ancient temples and sacred kshetras.",
    type: "book",
    locale: "en_IN",
    siteName: "Thirtha Yatra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thirtha Yatra — A Guide to Holy Temples and Thirtha Kshetras in India",
    description:
      "A journey through the spiritual geography of Bharat. Discover, understand, plan, and experience India's sacred kshetras.",
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
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#171717] font-sans antialiased selection:bg-[#8A5A24]/15 selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}
