import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Adventure World | Theme Park — New Administrative Capital",
  description: "World-class theme park in the New Administrative Capital — An exceptional entertainment experience for all ages. Book your tickets now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className="h-full antialiased">
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}


