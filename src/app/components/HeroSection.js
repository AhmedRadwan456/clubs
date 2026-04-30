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
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Amusement Park" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md"
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
          className="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl"
        >
          {t.welcome} <br />
          <span className="text-indigo-400">Adventure World</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t.desc}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => onBookNow()}
            className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-indigo-500/30 flex items-center justify-center gap-2 group"
          >
            {t.book}
            {lang === "ar" ? <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>
          <a 
            href="#zones" 
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center"
          >
            {t.explore}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-white/50 bg-slate-200 overflow-hidden shadow-lg">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
              </div>
            ))}
          </div>
          <div className="text-start">
            <div className="flex items-center gap-1.5">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="font-black text-lg text-white">4.9</span>
            </div>
            <p className="text-sm text-white/60 mt-0.5">{t.rating}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
