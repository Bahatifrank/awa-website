import Navbar from "../components/Navbar";
import Footer from "../components/footer"; // Import the new Footer
import "./globals.css";

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
        <Footer /> {/* Add the Footer here */}
      </body>
    </html>
  );
}