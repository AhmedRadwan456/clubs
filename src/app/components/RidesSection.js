"use client";
import { motion } from "framer-motion";

const rides = [
  {
    emoji: "🎢",
    name: "الأفعونية الفائقة",
    desc: "أسرع أفعونية في مصر — تصل إلى 120 كم/س على مسار فولاذي بطول 800 م",
    tag: "Extreme",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    emoji: "🗼",
    name: "برج السقوط الحر",
    desc: "سقوط حر من ارتفاع 40 متراً — تجربة لا تُنسى لمحبي الإثارة الحقيقية",
    tag: "إثارة",
    tagColor: "bg-orange-100 text-orange-600",
  },
  {
    emoji: "👻",
    name: "قلعة الأشباح",
    desc: "رحلة مرعبة داخل قلعة مظلمة مليئة بالمفاجآت والمؤثرات الخاصة",
    tag: "Horror",
    tagColor: "bg-purple-100 text-purple-600",
  },
  {
    emoji: "✂️",
    name: "لعبة المقص",
    desc: "تأرجح مزدوج ومقلوب في الهواء بسرعة عالية — فقط لأصحاب القلوب القوية",
    tag: "Extreme",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    emoji: "🌊",
    name: "الشلالات",
    desc: "ركوب القوارب الخشبية والسقوط المفاجئ في المياه من ارتفاع عالي",
    tag: "مائي",
    tagColor: "bg-cyan-100 text-cyan-600",
  },
  {
    emoji: "🏎️",
    name: "عربيات السباق",
    desc: "حلبة كارتينج احترافية تنافس فيها أصدقائك بمهارة وسرعة",
    tag: "إثارة",
    tagColor: "bg-emerald-100 text-emerald-600",
  },
  {
    emoji: "⛵",
    name: "مركب سندباد",
    desc: "رحلة بحرية أسطورية تحاكي مغامرات السندباد مع أمواج عاتية ومفاجآت",
    tag: "مغامرة",
    tagColor: "bg-indigo-100 text-indigo-600",
  },
  {
    emoji: "🤸",
    name: "الترمبولين",
    desc: "صالة قفز مطاطية ضخمة تناسب جميع الأعمار لإخراج كل طاقتك",
    tag: "مرح",
    tagColor: "bg-pink-100 text-pink-600",
  },
  {
    emoji: "🌪️",
    name: "المنخل",
    desc: "دوران واهتزاز عنيف في كل الاتجاهات — تجربة مليئة بالضحك والتحدي",
    tag: "Extreme",
    tagColor: "bg-red-100 text-red-600",
  },
  {
    emoji: "🎡",
    name: "العجلة الدوارة الضخمة",
    desc: "استمتع بإطلالة بانورامية على كامل المتنزه من ارتفاع 60 متراً",
    tag: "عائلي",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    emoji: "🚗",
    name: "السيارات الكهربائية",
    desc: "ملعب السيارات الكهربائية — مرح لا حدود له للكبار والصغار",
    tag: "مرح",
    tagColor: "bg-amber-100 text-amber-600",
  },
  {
    emoji: "🎠",
    name: "الكاروسيل السحري",
    desc: "دوامة موسيقية كلاسيكية بألوان زاهية — مثالية للأطفال والعائلات",
    tag: "أطفال",
    tagColor: "bg-pink-100 text-pink-600",
  },
  {
    emoji: "☕",
    name: "الفناجين الدوارة",
    desc: "دورانات سريعة ومرحة داخل فناجين ملونة ضخمة — لعبة كلاسيكية مفضلة",
    tag: "عائلي",
    tagColor: "bg-orange-100 text-orange-600",
  },
  {
    emoji: "🚢",
    name: "السفينة المتأرجحة",
    desc: "تأرجح في الهواء كالقراصنة بتجربة تجمع بين المرح والمغامرة",
    tag: "إثارة",
    tagColor: "bg-teal-100 text-teal-600",
  },
  {
    emoji: "🚂",
    name: "قطار المناجم",
    desc: "رحلة سريعة وملتوية في جبال ومناجم افتراضية للأسرة كلها",
    tag: "عائلي",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
];

export default function RidesSection() {
  return (
    <section id="zones" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <span className="inline-block mb-3 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-widest">
          🏝️ المنطقة الثيماتية
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          عالم <span className="gradient-text">المغامرات</span>
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-lg">
          Adventure Land — ٤٢,٠٠٠ م² من الإثارة والمتعة لكل الأعمار
        </p>
      </motion.div>

      {/* Zone Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-red-500 to-orange-400 rounded-3xl p-8 mb-10 overflow-hidden text-white text-center shadow-2xl shadow-red-200"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <div className="text-6xl mb-3">🏝️</div>
          <h3 className="text-3xl font-black mb-2">عالم المغامرات</h3>
          <p className="text-white/80 text-base max-w-md mx-auto">
            المنطقة الأكثر إثارة في Adventure World — مغامرات لا تنتهي تنتظرك
          </p>
        </div>
      </motion.div>

      {/* Rides Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rides.map((ride, i) => (
          <motion.div
            key={ride.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-white rounded-3xl p-6 border-2 border-slate-50 hover:border-red-100 hover:shadow-xl hover:shadow-red-50 transition-all duration-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
              {ride.emoji}
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-black text-lg leading-tight">{ride.name}</h3>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${ride.tagColor}`}>
                {ride.tag}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{ride.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
