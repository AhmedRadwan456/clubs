"use client";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-indigo-100/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center shadow-lg text-lg">
            🎡
          </div>
          <div>
            <div className="text-lg font-black gradient-text leading-tight">Adventure World</div>
            <div className="text-[10px] font-semibold text-slate-400 tracking-wider leading-tight">ملاهي عالمية</div>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          <a href="#zones" className="hover:text-indigo-600 transition-colors">المناطق</a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">مميزاتنا</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">التذاكر</a>
          <a href="#stats" className="hover:text-indigo-600 transition-colors">المشروع</a>
        </div>

        <button
          onClick={onBookNow}
          className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 flex items-center gap-2"
        >
          <span>🎟️</span> احجز تذكرتك
        </button>
      </div>
    </nav>
  );
}
