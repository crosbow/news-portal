import "./globals.css";

export const metadata = {
  title: "LWS news portal",
  description: "Keep with us to get latest news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
