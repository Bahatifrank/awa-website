import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./globals.css";

export const metadata = {
  title: "Adolescents Wellness Africa",
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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
