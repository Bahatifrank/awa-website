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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-slate-900 antialiased">
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

        {/* 1. Navbar stays strictly at top */}
        <header className="w-full z-50">
          <Navbar />
        </header>

        {/* 2. Main content expands to push footer down */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* 3. Footer strictly at the bottom */}
        <Footer />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5EGC3BYM2N" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5EGC3BYM2N');
          `}
        </Script>
      </body>
    </html>
  );
}