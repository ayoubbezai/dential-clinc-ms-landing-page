import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chebaani Clinic Dental Clinic | Best Dentist in Batna, Algeria",
  description:
    "Chebaani Clinic Dental Clinic in Batna, Algeria offers expert dental care including teeth cleaning, whitening, implants, and family dentistry. Book your appointment today.",
  keywords: [
    "dentist in Batna",
    "dental clinic Batna",
    "teeth cleaning Batna",
    "dental implants Batna",
    "family dentist Batna",
    "Chebaani Clinic dental Algeria",
  ],
  openGraph: {
    title: "Chebaani Clinic Dental Clinic | Trusted Dentist in Batna, Algeria",
    description:
      "Visit Chebaani Clinic Dental Clinic in Batna for professional and gentle dental care. Serving families across Algeria with cleanings, implants, and cosmetic dentistry.",
    url: "https://home.ayoubbezai.site",
    siteName: "Chebaani Clinic Dental Clinic",
    images: [
      {
        url: "https://www.chebaaniclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chebaani Clinic Dental Clinic in Batna",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chebaani Clinic Dental Clinic | Dentist in Batna, Algeria",
    description:
      "Looking for a professional and friendly dentist in Batna, Algeria? Chebaani Clinic offers comprehensive dental care for the whole family.",
    images: ["https://www.chebaaniclinic.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load the Dialogflow script in the head for proper initialization */}
        <script
          src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <df-messenger
          intent="WELCOME"
          chat-title="DentistBot"
          agent-id="67ef9f51-5618-41f3-a59b-a7c2f9605cee"
          language-code="fr"
        ></df-messenger>
      </body>
    </html>
  );
}
