import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Adventure World | ملاهي عالمية — العاصمة الإدارية الجديدة",
  description: "مدينة الملاهي العالمية في العاصمة الإدارية الجديدة — تجربة ترفيهية استثنائية لجميع الأعمار. احجز تذكرتك الآن.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="ltr" className="h-full antialiased">
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}


