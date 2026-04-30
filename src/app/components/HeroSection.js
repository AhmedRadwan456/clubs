"use client";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Star, MapPin } from "lucide-react";

export default function HeroSection({ onBookNow, lang }) {
  const dict = {
    ar: {
      badge: "الافتتاح الكبير في العاصمة الجديدة! 🚀",
      welcome: "مرحباً بك في",
      desc: "أكبر مدينة ملاهي عالمية في قلب العاصمة الإدارية الجديدة. على مساحة 100 فدان وباستثمارات 900 مليون جنيه، نقدم تجربة ترفيهية استثنائية لجميع الأعمار.",
      book: "احجز التذاكر الآن",
      explore: "استكشف الألعاب",
      rating: "تقييم الزوار",
      loc: "العاصمة الإدارية"
    },
    en: {
      badge: "Grand Opening in the New Capital! 🚀",
      welcome: "Welcome to",
      desc: "The largest global theme park in the heart of the New Administrative Capital. Spread across 100 acres with an investment of 900 Million EGP, offering world-class entertainment for all ages.",
      book: "Book Tickets Now",
      explore: "Explore Rides",
      rating: "Visitor Rating",
      loc: "New Capital"
    }
  };
  const t = dict[lang];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            {t.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6"
          >
            {t.welcome} <br />
            <span className="gradient-text">Adventure World</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {t.desc}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button 
              onClick={() => onBookNow()}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group"
            >
              {t.book}
              {lang === "ar" ? <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
            <a 
              href="#zones" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl font-bold text-lg border-2 border-slate-100 transition-all flex items-center justify-center"
            >
              {t.explore}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-black text-sm">4.9</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{t.rating}</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative w-full aspect-square max-w-lg mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="relative h-full w-full rounded-3xl overflow-hidden glass border-4 border-white/50 shadow-2xl">
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-8xl">🎢</div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className={`absolute -bottom-6 ${lang === 'ar' ? '-right-6' : '-left-6'} bg-white p-4 rounded-2xl shadow-xl border border-slate-100`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">{lang === "ar" ? "الموقع" : "Location"}</p>
                  <p className="font-black text-sm">{t.loc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
