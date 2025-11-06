import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarqueeBanner from "@/components/MarqueeBanner";
import "./globals.css";

export const metadata = {
  title: "The News Island | Assignment 7",
  description: "Keep with us to get latest news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <Header />
        <MarqueeBanner />

        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
