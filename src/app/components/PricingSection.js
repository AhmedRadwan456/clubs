"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check, Sparkles } from "lucide-react";

const packages = [
  {
    id: "basic",
    name: "باقة الدخول الأساسية",
    desc: "دخول للمتنزه مع الاستمتاع بكل الألعاب المجانية",
    arabPrice: 150,
    foreignerPrice: 400,
    perks: [
      "دخول كامل للمتنزه",
      "9 ألعاب مجانية مشمولة",
      "دخول منطقة الأطفال",
      "حضور العروض الحية",
    ],
    highlight: false,
    color: "from-slate-500 to-slate-600",
  },
  {
    id: "3-rides",
    name: "باقة المغامر (3 ألعاب)",
    desc: "الباقة الأساسية + اختيار 3 ألعاب مميزة",
    arabPrice: 250,
    foreignerPrice: 600,
    perks: [
      "جميع مميزات الباقة الأساسية",
      "اختيار 3 ألعاب مميزة (مدفوعة)",
      "توفير 20% من سعر التذاكر الفردية",
    ],
    highlight: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "5-rides",
    name: "باقة البطل (5 ألعاب)",
    desc: "الباقة الأساسية + اختيار 5 ألعاب مميزة",
    arabPrice: 350,
    foreignerPrice: 800,
    perks: [
      "جميع مميزات الباقة الأساسية",
      "اختيار 5 ألعاب مميزة (مدفوعة)",
      "توفير 35% من سعر التذاكر الفردية",
      "صورة تذكارية مجانية",
    ],
    highlight: true,
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "vip",
    name: "باقة VIP الشاملة",
    desc: "اللعب بلا حدود وبدون طوابير",
    arabPrice: 500,
    foreignerPrice: 1200,
    perks: [
      "دخول غير محدود لجميع الألعاب",
      "أولوية الدخول (Fast Track)",
      "وجبة مجانية من المطعم الرئيسي",
      "أفضل قيمة للمتعة الكاملة",
    ],
    highlight: false,
    color: "from-amber-500 to-yellow-500",
  },
];

export default function PricingSection({ onBook }) {
  const [visitorType, setVisitorType] = useState("arab");

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block mb-3 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-widest">
          🎟️ باقات التذاكر
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          اختر <span className="gradient-text">المغامرة</span> المناسبة لك
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-lg mb-8">
          4 باقات مختلفة تناسب كل الاحتياجات — جميع الباقات صالحة ليوم كامل
        </p>

        {/* Nationality Toggle */}
        <div className="inline-flex bg-slate-100 p-1.5 rounded-full mb-4">
          <button
            onClick={() => setVisitorType("arab")}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              visitorType === "arab" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            🌙 زائر عربي / مصري
          </button>
          <button
            onClick={() => setVisitorType("foreigner")}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              visitorType === "foreigner" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            🌍 زائر أجنبي
          </button>
        </div>

        <div className="text-sm font-bold text-amber-600 bg-amber-50 inline-block px-4 py-2 rounded-xl mt-4 border border-amber-200">
          👶 خصم يصل إلى 40% للأطفال أقل من 10 سنوات (تُحسب في شاشة الحجز)
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, i) => {
          const price = visitorType === "arab" ? pkg.arabPrice : pkg.foreignerPrice;
          
          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-6 border-2 flex flex-col transition-all duration-300 ${
                pkg.highlight ? "border-indigo-500 shadow-2xl shadow-indigo-200 scale-105 z-10" : "border-slate-100 hover:border-indigo-200 hover:shadow-xl"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 w-max">
                  <Sparkles className="w-3 h-3" /> الأكثر شعبية
                </div>
              )}

              <div className="mb-5 flex-1">
                <h3 className="text-xl font-black mb-1 text-slate-800">{pkg.name}</h3>
                <p className="text-slate-400 text-xs h-8">{pkg.desc}</p>
                
                <div className="mt-4 mb-2 flex items-end gap-1">
                  <span className="text-4xl font-black text-indigo-600">{price}</span>
                  <div className="mb-1">
                    <span className="text-sm font-bold text-slate-400">ج.م</span>
                    <span className="text-[10px] text-slate-400 block -mt-1">/ بالغ</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 mb-6 flex-1">
                <ul className="space-y-3">
                  {pkg.perks.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onBook({ type: visitorType, packageId: pkg.id })}
                className={`w-full py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group text-sm ${
                  pkg.highlight 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700" 
                    : "bg-slate-50 text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                احجز هذه الباقة
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
