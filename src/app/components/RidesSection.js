"use client";
import { motion } from "framer-motion";

export default function RidesSection({ lang }) {
  const dict = {
    ar: {
      badge: "🎢 أشهر الألعاب العالمية",
      title: "عالم المغامرات",
      desc: "استمتع بأكثر من 20 لعبة وفعالية ترفيهية تناسب الجميع، إليك قائمة بأشهر 12 لعبة منها:",
      bannerIcon: "🔥",
      bannerTitle: "أضخم تجمع ترفيهي",
      bannerDesc: "من الألعاب العائلية الهادئة وحتى الألعاب التي تحبس الأنفاس! وهناك الكثير بانتظارك...",
      paidBadge: "⭐️ لعبة مميزة (مدفوعة)",
      freeBadge: "✔️ مشمولة بالدخول",
      rides: [
        { emoji: "🏎️", name: "حلبة الكارتينج المحترفة", desc: "أسرع حلبة سباق في المنطقة — جرب إثارة الفورمولا 1 مع أصدقائك", tag: "إثارة", tagColor: "bg-emerald-100 text-emerald-600", paid: true },
        { emoji: "🤸", name: "مجمع الترامبولين العملاق", desc: "أكبر منطقة قفز حر وعقبات حركية — فرغ طاقتك واستمتع بالمغامرة", tag: "نشاط", tagColor: "bg-yellow-100 text-yellow-600", paid: true },
        { emoji: "🏴‍☠️", name: "سفينة القراصنة العملاقة", desc: "أرجوحة ضخمة تتأرجح بك عالياً في السماء — تجربة ممتعة ومثيرة لجميع الأعمار", tag: "إثارة", tagColor: "bg-blue-100 text-blue-600", paid: true },
        { emoji: "🎢", name: "الأفعونية الفائقة", desc: "أسرع أفعونية في الشرق الأوسط — سرعات خيالية وانقلابات تحبس الأنفاس", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },
        { emoji: "👓", name: "سينما 3D التفاعلية", desc: "تجربة واقع افتراضي مبهرة مع حركة، هواء، ومؤثرات حقيقية", tag: "تكنولوجيا", tagColor: "bg-purple-100 text-purple-600", paid: true },
        { emoji: "✂️", name: "المقص العملاق", desc: "دوران كامل 360 درجة في الهواء — تحدي الجاذبية لأصحاب القلوب القوية", tag: "إثارة", tagColor: "bg-red-100 text-red-600", paid: true },

        { emoji: "🗼", name: "برج السقوط الحر", desc: "سقوط مفاجئ من ارتفاع 60 متراً — تجربة الأدرينالين القصوى", tag: "إثارة", tagColor: "bg-orange-100 text-orange-600", paid: false },
        { emoji: "👻", name: "قصر الرعب المسكون", desc: "رحلة مرعبة داخل قصر مليء بالأشباح والممثلين — هل تجرؤ على الدخول؟", tag: "رعب", tagColor: "bg-slate-100 text-slate-800", paid: false },
        { emoji: "🧩", name: "متاهة المرايا العجيبة", desc: "متاهة مليئة بالانعكاسات والممرات المخدوعة — هل ستتمكن من إيجاد مخرجك؟", tag: "ذكاء", tagColor: "bg-indigo-100 text-indigo-600", paid: false },
        { emoji: "🎡", name: "عجلة عين العاصمة", desc: "استمتع بإطلالة بانورامية ساحرة على كامل المدينة من أعلى نقطة في المتنزه", tag: "عائلي", tagColor: "bg-blue-100 text-blue-600", paid: false },
        { emoji: "💥", name: "سيارات التصادم نيون", desc: "ساحة سيارات كهربائية بألوان نيون صاخبة وموسيقى حماسية", tag: "مرح", tagColor: "bg-amber-100 text-amber-600", paid: false },
        { emoji: "🎠", name: "الكاروسيل الملكي", desc: "الدوامة الكلاسيكية الشهيرة — رحلة خيالية للأطفال في عالم من الألوان", tag: "أطفال", tagColor: "bg-rose-100 text-rose-600", paid: false },
      ]
    },
    en: {
      badge: "🎢 World-Class Attractions",
      title: "Adventure World",
      desc: "Enjoy over 20 rides and entertainment activities for everyone. Here are our top 12 attractions:",
      bannerIcon: "🔥",
      bannerTitle: "The Ultimate Thrill Zone",
      bannerDesc: "From cutting-edge VR to heart-pumping drops — and many more surprises!",
      paidBadge: "⭐️ Elite (Paid)",
      freeBadge: "✔️ Legendary (Free)",
      rides: [
        { emoji: "🏎️", name: "Pro Go-Kart Circuit", desc: "The fastest track in the region — experience Formula 1 thrills with your friends.", tag: "Thrill", tagColor: "bg-emerald-100 text-emerald-600", paid: true },
        { emoji: "🤸", name: "Giant Trampoline Park", desc: "The largest free-jump area and obstacle course — release your energy and enjoy the adventure.", tag: "Active", tagColor: "bg-yellow-100 text-yellow-600", paid: true },
        { emoji: "🏴‍☠️", name: "The Giant Pirate Ship", desc: "A massive swing that takes you high into the clouds — a fun and thrilling experience for all ages.", tag: "Thrill", tagColor: "bg-blue-100 text-blue-600", paid: true },
        { emoji: "🎢", name: "Hyper Coaster", desc: "The fastest rollercoaster in the Middle East — extreme speeds and breathtaking loops.", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },
        { emoji: "👓", name: "Interactive 3D Cinema", desc: "A stunning VR experience with motion, wind, and hyper-realistic effects.", tag: "Tech", tagColor: "bg-purple-100 text-purple-600", paid: true },
        { emoji: "✂️", name: "The Giant Scissors", desc: "A full 360-degree rotation in mid-air — the ultimate gravity-defying thrill.", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },

        { emoji: "🗼", name: "Zero-G Drop Tower", desc: "A sudden free fall from 60 meters high — the ultimate adrenaline rush.", tag: "Thrill", tagColor: "bg-orange-100 text-orange-600", paid: false },
        { emoji: "👻", name: "Haunted Mansion", desc: "A terrifying journey inside a mansion full of ghosts and live actors — do you dare?", tag: "Horror", tagColor: "bg-slate-100 text-slate-800", paid: false },
        { emoji: "🧩", name: "The Magical Mirror Maze", desc: "A maze full of reflections and trick paths — will you be able to find your way out?", tag: "Mind", tagColor: "bg-indigo-100 text-indigo-600", paid: false },
        { emoji: "🎡", name: "Capital Eye", desc: "Enjoy a magical panoramic view of the entire city from the park's highest point.", tag: "Family", tagColor: "bg-blue-100 text-blue-600", paid: false },
        { emoji: "💥", name: "Neon Bumper Cars", desc: "Electric car arena with vibrant neon colors and high-energy music.", tag: "Fun", tagColor: "bg-amber-100 text-amber-600", paid: false },
        { emoji: "🎠", name: "Royal Carousel", desc: "The famous classic carousel — a magical journey for kids in a world of colors.", tag: "Kids", tagColor: "bg-rose-100 text-rose-600", paid: false },
      ]
    }
  };
  const t = dict[lang];

  return (
    <section id="zones" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <span className="inline-block mb-3 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-widest">
          {t.badge}
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">{t.title}</span>
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto text-lg">
          {t.desc}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 mb-10 overflow-hidden text-white text-center shadow-2xl shadow-indigo-200"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <div className="text-6xl mb-3">{t.bannerIcon}</div>
          <h3 className="text-3xl font-black mb-2">{t.bannerTitle}</h3>
          <p className="text-white/80 text-base max-w-md mx-auto">
            {t.bannerDesc}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.rides.map((ride, i) => (
          <motion.div
            key={ride.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border-2 border-white/60 shadow-sm hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300"
          >
            <div className={`absolute top-5 ${lang === 'ar' ? 'left-5' : 'right-5'} px-3 py-1 text-[10px] font-bold rounded-full border ${ride.paid ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"}`}>
              {ride.paid ? t.paidBadge : t.freeBadge}
            </div>

            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block mt-2">
              {ride.emoji}
            </div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-black text-lg leading-tight">{ride.name}</h3>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${lang === 'ar' ? 'ml-2' : 'mr-2'} ${ride.tagColor}`}>
                {ride.tag}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{ride.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-slate-400 font-medium italic">
          {lang === "ar" 
            ? "... بالإضافة إلى العشرات من الألعاب الجانبية، ألعاب المهارات، والمطاعم العالمية المنتشرة في أنحاء المتنزه" 
            : "... plus dozens of side games, skill challenges, and international restaurants located throughout the park"}
        </p>
      </motion.div>
    </section>
  );
}
