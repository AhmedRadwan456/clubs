"use client";
import { motion } from "framer-motion";

const rides = [
  // --- ⭐️ الألعاب المميزة (المدفوعة) - 9 ألعاب ---
  {
    emoji: "🎢",
    name: "الأفعونية الفائقة",
    desc: "أسرع أفعونية في الشرق الأوسط — تصل إلى 120 كم/س بانقلابات مذهلة",
    tag: "Extreme",
    tagColor: "bg-red-100 text-red-600",
    paid: true,
  },
  {
    emoji: "🗼",
    name: "برج السقوط الحر",
    desc: "سقوط حر من ارتفاع 60 متراً — تجربة تحبس الأنفاس لمحبي الأدرينالين",
    tag: "إثارة",
    tagColor: "bg-orange-100 text-orange-600",
    paid: true,
  },
  {
    emoji: "🚀",
    name: "المقلاع البشري",
    desc: "انطلاق صاروخي للسماء بسرعة خيالية — اللعبة الأكثر رعباً وإثارة",
    tag: "Extreme",
    tagColor: "bg-red-100 text-red-600",
    paid: true,
  },
  {
    emoji: "🌊",
    name: "شلالات الأدغال",
    desc: "ركوب القوارب الخشبية والسقوط المفاجئ في بحيرة ضخمة من ارتفاع عالي",
    tag: "مائي",
    tagColor: "bg-cyan-100 text-cyan-600",
    paid: true,
  },
  {
    emoji: "🏎️",
    name: "حلبة الكارتينج",
    desc: "أكبر حلبة سباق سيارات احترافية — نافس أصدقائك بمهارة وسرعة",
    tag: "إثارة",
    tagColor: "bg-emerald-100 text-emerald-600",
    paid: true,
  },
  {
    emoji: "🛸",
    name: "الطبق الطائر",
    desc: "بندول عملاق يتأرجح ويدور في نفس الوقت لارتفاعات شاهقة",
    tag: "Extreme",
    tagColor: "bg-purple-100 text-purple-600",
    paid: true,
  },
  {
    emoji: "✂️",
    name: "المقص العملاق",
    desc: "تأرجح مزدوج ومقلوب 360 درجة في الهواء — فقط لأصحاب القلوب القوية",
    tag: "إثارة",
    tagColor: "bg-red-100 text-red-600",
    paid: true,
  },
  {
    emoji: "🛶",
    name: "نهر التجديف السريع",
    desc: "مغامرة مائية وسط أمواج اصطناعية ودوامات عنيفة في قوارب دائرية",
    tag: "مائي",
    tagColor: "bg-cyan-100 text-cyan-600",
    paid: true,
  },
  {
    emoji: "🌪️",
    name: "إعصار المنخل",
    desc: "دوران واهتزاز عنيف في كل الاتجاهات — تجربة مليئة بالضحك والمرح",
    tag: "إثارة",
    tagColor: "bg-orange-100 text-orange-600",
    paid: true,
  },

  // --- ✔️ الألعاب المجانية (المشمولة) - 9 ألعاب ---
  {
    emoji: "🎡",
    name: "عجلة عين العاصمة",
    desc: "استمتع بإطلالة بانورامية ساحرة على كامل المتنزه من ارتفاع 80 متراً",
    tag: "عائلي",
    tagColor: "bg-blue-100 text-blue-600",
    paid: false,
  },
  {
    emoji: "👻",
    name: "قصر الرعب",
    desc: "رحلة مرعبة داخل قصر مظلم مليء بالمفاجآت الحية والمؤثرات الخاصة",
    tag: "Horror",
    tagColor: "bg-slate-100 text-slate-600",
    paid: false,
  },
  {
    emoji: "⛵",
    name: "سفينة القراصنة",
    desc: "تأرجح عالي في الهواء كالقراصنة بتجربة كلاسيكية تجمع بين المرح والمغامرة",
    tag: "عائلي",
    tagColor: "bg-teal-100 text-teal-600",
    paid: false,
  },
  {
    emoji: "💥",
    name: "السيارات التصادمية",
    desc: "ساحة السيارات الكهربائية — مرح لا حدود له للشباب والعائلات",
    tag: "مرح",
    tagColor: "bg-amber-100 text-amber-600",
    paid: false,
  },
  {
    emoji: "🚂",
    name: "قطار المناجم المفقودة",
    desc: "رحلة سريعة وملتوية داخل جبال ومناجم افتراضية مناسبة للأسرة كلها",
    tag: "مغامرة",
    tagColor: "bg-yellow-100 text-yellow-700",
    paid: false,
  },
  {
    emoji: "☕",
    name: "الفناجين الراقصة",
    desc: "دورانات سريعة ومرحة داخل فناجين ملونة ضخمة — لعبة لا تفقد متعتها",
    tag: "مرح",
    tagColor: "bg-orange-100 text-orange-600",
    paid: false,
  },
  {
    emoji: "🎪",
    name: "السيرك السحري",
    desc: "خيمة تفاعلية تضم عروض بهلوانية وألعاب خفة تناسب جميع الأعمار",
    tag: "عائلي",
    tagColor: "bg-pink-100 text-pink-600",
    paid: false,
  },
  {
    emoji: "🧊",
    name: "صالة الجليد",
    desc: "أكبر صالة تزلج على الجليد للهروب من الحر والاستمتاع بوقت رائع",
    tag: "مرح",
    tagColor: "bg-sky-100 text-sky-600",
    paid: false,
  },
  {
    emoji: "🎠",
    name: "الكاروسيل الملكي",
    desc: "دوامة خيول كلاسيكية بألوان زاهية وموسيقى هادئة — مثالية للأطفال",
    tag: "أطفال",
    tagColor: "bg-rose-100 text-rose-600",
    paid: false,
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
          🎢 أشهر الألعاب العالمية
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          عالم <span className="gradient-text">المغامرات</span>
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-lg">
          يضم 18 لعبة من أقوى وأشهر الألعاب — 9 ألعاب مجانية مع التذكرة، و 9 ألعاب مميزة (مدفوعة) للباقات
        </p>
      </motion.div>

      {/* Zone Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 mb-10 overflow-hidden text-white text-center shadow-2xl shadow-indigo-200"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <div className="text-6xl mb-3">🔥</div>
          <h3 className="text-3xl font-black mb-2">أضخم تجمع ترفيهي</h3>
          <p className="text-white/80 text-base max-w-md mx-auto">
            من الألعاب العائلية الهادئة وحتى الألعاب التي تحبس الأنفاس!
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
            transition={{ delay: i * 0.04 }}
            className="group relative bg-white rounded-3xl p-6 border-2 border-slate-50 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300"
          >
            {/* Free/Paid Badge */}
            <div className={`absolute top-5 left-5 px-3 py-1 text-[10px] font-black rounded-full border ${ride.paid ? "bg-amber-50 text-amber-600 border-amber-200" : "bg-emerald-50 text-emerald-600 border-emerald-200"}`}>
              {ride.paid ? "⭐️ لعبة مميزة (مدفوعة)" : "✔️ مشمولة بالدخول"}
            </div>

            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block mt-2">
              {ride.emoji}
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-black text-lg leading-tight">{ride.name}</h3>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-2 ${ride.tagColor}`}>
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
