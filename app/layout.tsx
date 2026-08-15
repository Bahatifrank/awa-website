import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./globals.css";

const SITE_URL = "https://www.adolescentswellness-africa.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Adolescents Wellness Africa | Adolescent Mental Health & Life Skills in Kenya",
    template: "%s | Adolescents Wellness Africa",
  },
  description: "Adolescents Wellness Africa supports adolescent mental health, life skills, wellbeing and positive development through programs for young people, schools, families and communities in Kenya.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Adolescents Wellness Africa",
    url: SITE_URL,
    title: "Adolescents Wellness Africa",
    description: "Adolescent mental health, life skills, and wellness programs for schools and communities across Kenya.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "PASTE_YOUR_SEARCH_CONSOLE_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adolescents Wellness Africa",
              alternateName: "AWA",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "JKUAT Road",
                addressLocality: "Juja",
                addressRegion: "Kiambu County",
                addressCountry: "KE",
              },
              telephone: "+254742631201",
            }),
          }}
        />
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />

        {/* Google Analytics — replace G-XXXXXXX with your real GA4 ID */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}