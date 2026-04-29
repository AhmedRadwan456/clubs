"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, Users } from "lucide-react";

export default function HeroSection({ onBookNow }) {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="relative h-[78vh] w-full">
        <Image
          src="/hero.png"
          alt="Adventure World — ملاهي عالمية"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcff] via-[#fdfcff]/20 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcff]/30 via-transparent to-transparent" />

        {/* Park Open Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-24 left-6"
        >
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-green-700 uppercase tracking-wider">المتنزه مفتوح الآن</span>
          </div>
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute top-24 right-6 md:right-16"
        >
          <div className="glass px-4 py-3 rounded-2xl shadow-xl">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-black text-sm">4.9</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">تقييم الزوار</p>
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 -mt-52 px-6 pb-16 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-widest">
            🎡 مدينة الملاهي العالمية — العاصمة الإدارية الجديدة
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-3">
            <span className="gradient-text">Adventure</span>
            <br />
            <span className="text-slate-800">World</span>
          </h1>
          <p className="text-xl font-bold text-slate-500 mb-2">ملاهي عالمية — مصر</p>
          <p className="text-slate-400 text-base mb-10 max-w-lg mx-auto">
            تجربة ترفيهية استثنائية على مساحة ١٠٠ فدان في العاصمة الإدارية الجديدة — ٤ مناطق ثيماتية، ألعاب مثيرة، وذكريات لا تُنسى.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={onBookNow}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-300 active:scale-95 w-full sm:w-auto"
            >
              🎟️ احجز تذكرتك الآن
            </button>
            <a
              href="#zones"
              className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 font-bold rounded-2xl text-lg hover:bg-slate-50 transition-all w-full sm:w-auto"
            >
              استكشف المناطق ←
            </a>
          </div>
        </motion.div>

        {/* Info Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>العاصمة الإدارية — ٤٥ كم شرق القاهرة</span>
          </div>
          <div className="w-1 h-1 bg-slate-200 rounded-full hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>يومياً: ١٠ صباحاً – ١١ مساءً</span>
          </div>
          <div className="w-1 h-1 bg-slate-200 rounded-full hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-indigo-400" />
            <span>٤ مناطق ثيماتية</span>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div id="stats" className="bg-white border-t border-b border-slate-100 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "١٠٠", unit: "فدان", label: "المساحة الإجمالية" },
            { value: "١٠,٠٠٠", unit: "زائر", label: "الطاقة الاستيعابية يومياً" },
            { value: "٩٠٠م", unit: "ج.م", label: "إجمالي الاستثمار" },
            { value: "٥٥٪", unit: "ROI", label: "العائد السنوي" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-3xl font-black gradient-text">{s.value} <span className="text-lg">{s.unit}</span></div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
