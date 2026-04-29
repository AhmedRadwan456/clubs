"use client";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const arabPerks = [
  "دخول كامل للمتنزه",
  "جميع ألعاب العائلة",
  "منطقة الأطفال مجاناً",
  "صالحة يوم كامل",
];
const foreignerPerks = [
  "دخول كامل للمتنزه",
  "أولوية الدخول (Fast Track)",
  "صورة ركوبة مجانية",
  "صالحة يوم كامل",
];

export default function PricingSection({ onBook }) {
  return (
    <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-3 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-widest">
          🎟️ أسعار التذاكر
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          اختر <span className="gradient-text">تذكرتك</span>
        </h2>
        <p className="text-slate-500 max-w-md mx-auto text-lg">
          أسعار واضحة بدون رسوم مخفية — للعرب والأجانب على حد سواء
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Arab Visitor */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300"
        >
          <div className="mb-6">
            <span className="text-3xl">🌙</span>
            <h3 className="text-2xl font-black mt-3">الزائر العربي</h3>
            <p className="text-slate-400 text-sm mt-1">للمصريين والعرب والمقيمين</p>
          </div>

          <div className="mb-2">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-slate-400 mb-3">من</span>
              <span className="text-6xl font-black text-indigo-600">٢٠٠</span>
              <div className="mb-2">
                <div className="text-lg font-bold text-slate-400">ج.م</div>
                <div className="text-xs text-slate-400">/ فرد</div>
              </div>
            </div>
            <p className="text-xs text-slate-400">تذكرة شاملة: ٣٥٠ – ٥٠٠ ج.م</p>
          </div>

          <ul className="space-y-3 my-8">
            {arabPerks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                {p}
              </li>
            ))}
          </ul>
          <button
            onClick={() => onBook("arab")}
            className="w-full py-4 border-2 border-indigo-600 text-indigo-600 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            احجز تذكرة عربي
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* International Visitor */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white overflow-hidden shadow-2xl shadow-indigo-300"
        >
          <div className="absolute top-5 right-5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/5 rounded-full" />

          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-3xl">🌍</span>
              <h3 className="text-2xl font-black mt-3">الزائر الأجنبي</h3>
              <p className="text-white/70 text-sm mt-1">International Visitor</p>
            </div>

            <div className="mb-2">
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-white/60 mb-3">من</span>
                <span className="text-6xl font-black">٥٠٠</span>
                <div className="mb-2">
                  <div className="text-lg font-bold text-white/70">ج.م</div>
                  <div className="text-xs text-white/60">/ فرد</div>
                </div>
              </div>
              <p className="text-xs text-white/60">تذكرة شاملة: ٦٠٠ – ٧٥٠ ج.م</p>
            </div>

            <ul className="space-y-3 my-8">
              {foreignerPerks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onBook("foreigner")}
              className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
            >
              Book International Ticket
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 p-5 bg-amber-50 border border-amber-100 rounded-2xl text-center text-sm text-amber-700"
      >
        💡 <strong>باقات خاصة:</strong> خصومات للمجموعات المدرسية والعائلات (٤ أفراد فأكثر) والحجز المبكر
      </motion.div>
    </section>
  );
}
