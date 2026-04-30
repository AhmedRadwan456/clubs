"use client";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar({ onBookNow, lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dict = {
    ar: { links: ["المناطق", "المميزات", "الأسعار"], book: "احجز تذكرتك" },
    en: { links: ["Zones", "Features", "Pricing"], book: "Book Tickets" }
  };
  const t = dict[lang];
  const navLinks = [
    { id: "zones", label: t.links[0] },
    { id: "features", label: t.links[1] },
    { id: "pricing", label: t.links[2] },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-200">🎡</div>
          <div>
            <div className={`font-black text-xl leading-tight ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>Adventure World</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">{item.label}</a>
          ))}
          
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
            <Globe className="w-4 h-4" /> {lang === "ar" ? "English" : "العربية"}
          </button>

          <button onClick={onBookNow} className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-200">
            {t.book}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="p-2 text-slate-600">
            <Globe className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-4 px-6 flex flex-col gap-4 md:hidden border-t border-slate-100">
          {navLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-base font-bold text-slate-600 py-2" onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
          ))}
          <button onClick={() => { onBookNow(); setMobileMenuOpen(false); }} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold mt-2">
            {t.book}
          </button>
        </div>
      )}
    </nav>
  );
}
