"use client";
import { motion } from "framer-motion";

export default function RidesSection({ lang }) {
  const dict = {
    ar: {
      badge: "🎢 أشهر الألعاب العالمية",
      title: "عالم المغامرات",
      desc: "يضم 12 لعبة من أقوى وأشهر الألعاب — 6 ألعاب مجانية مع التذكرة، و 6 ألعاب مميزة (مدفوعة) للباقات",
      bannerIcon: "🔥",
      bannerTitle: "أضخم تجمع ترفيهي",
      bannerDesc: "من الألعاب العائلية الهادئة وحتى الألعاب التي تحبس الأنفاس!",
      paidBadge: "⭐️ لعبة مميزة (مدفوعة)",
      freeBadge: "✔️ مشمولة بالدخول",
      rides: [
        { emoji: "🏎️", name: "حلبة الكارتينج", desc: "أكبر حلبة سباق سيارات احترافية — نافس أصدقائك بمهارة وسرعة", tag: "إثارة", tagColor: "bg-emerald-100 text-emerald-600", paid: true },
        { emoji: "🧊", name: "صالة الجليد", desc: "أكبر صالة تزلج على الجليد للهروب من الحر والاستمتاع بوقت رائع", tag: "مرح", tagColor: "bg-sky-100 text-sky-600", paid: true },
        { emoji: "🚀", name: "المقلاع البشري", desc: "انطلاق صاروخي للسماء بسرعة خيالية — اللعبة الأكثر رعباً وإثارة", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },
        { emoji: "👓", name: "سينما 3D التفاعلية", desc: "تجربة واقع افتراضي مبهرة مع حركة، هواء، ومؤثرات حقيقية", tag: "تكنولوجيا", tagColor: "bg-purple-100 text-purple-600", paid: true },
        { emoji: "🧗‍♂️", name: "الزيبلاين العملاق", desc: "تحليق في الهواء فوق كل الملاهي على سلك بطول المتنزه بالكامل", tag: "مغامرة", tagColor: "bg-teal-100 text-teal-600", paid: true },
        { emoji: "👻", name: "بيت الرعب الحقيقي", desc: "رحلة مرعبة داخل قصر مظلم مليء بالممثلين الحقيقيين والمفاجآت", tag: "Horror", tagColor: "bg-slate-100 text-slate-800", paid: false },
        { emoji: "🎢", name: "الأفعونية الفائقة", desc: "أسرع أفعونية في الشرق الأوسط — تصل إلى 120 كم/س بانقلابات مذهلة", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },
        { emoji: "🗼", name: "برج السقوط الحر", desc: "سقوط حر من ارتفاع 60 متراً — تجربة تحبس الأنفاس لمحبي الأدرينالين", tag: "إثارة", tagColor: "bg-orange-100 text-orange-600", paid: false },
        { emoji: "🌊", name: "شلالات الأدغال", desc: "ركوب القوارب الخشبية والسقوط المفاجئ في بحيرة ضخمة", tag: "مائي", tagColor: "bg-cyan-100 text-cyan-600", paid: false },
        { emoji: "🎡", name: "عجلة عين العاصمة", desc: "استمتع بإطلالة بانورامية ساحرة على كامل المتنزه من ارتفاع 80 متراً", tag: "عائلي", tagColor: "bg-blue-100 text-blue-600", paid: false },
        { emoji: "💥", name: "السيارات التصادمية", desc: "ساحة السيارات الكهربائية — مرح لا حدود له للشباب والعائلات", tag: "مرح", tagColor: "bg-amber-100 text-amber-600", paid: false },
        { emoji: "🎠", name: "الكاروسيل الملكي", desc: "دوامة خيول كلاسيكية بألوان زاهية وموسيقى هادئة — مثالية للأطفال", tag: "أطفال", tagColor: "bg-rose-100 text-rose-600", paid: false },
      ]
    },
    en: {
      badge: "🎢 World-Famous Rides",
      title: "Adventure World",
      desc: "Featuring 12 of the most famous rides — 6 free rides with entry, and 6 premium rides for our special packages.",
      bannerIcon: "🔥",
      bannerTitle: "The Largest Entertainment Hub",
      bannerDesc: "From calm family rides to attractions that will take your breath away!",
      paidBadge: "⭐️ Premium (Paid)",
      freeBadge: "✔️ Included",
      rides: [
        { emoji: "🏎️", name: "Go-Kart Track", desc: "The largest professional racing track — compete with friends using skill and speed.", tag: "Thrill", tagColor: "bg-emerald-100 text-emerald-600", paid: true },
        { emoji: "🧊", name: "Ice Skating Rink", desc: "A massive ice rink to escape the heat and enjoy an amazing time.", tag: "Fun", tagColor: "bg-sky-100 text-sky-600", paid: true },
        { emoji: "🚀", name: "Human Slingshot", desc: "A rocket launch into the sky at unbelievable speeds — the most terrifying ride.", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },
        { emoji: "👓", name: "Interactive 3D Cinema", desc: "A stunning VR experience with motion, wind, and hyper-realistic effects.", tag: "Tech", tagColor: "bg-purple-100 text-purple-600", paid: true },
        { emoji: "🧗‍♂️", name: "Giant Zipline", desc: "Fly high in the air over the entire park on a wire spanning the full length.", tag: "Adventure", tagColor: "bg-teal-100 text-teal-600", paid: true },
        { emoji: "👻", name: "Real Haunted House", desc: "A terrifying journey inside a dark mansion filled with live actors and scares.", tag: "Horror", tagColor: "bg-slate-100 text-slate-800", paid: false },
        { emoji: "🎢", name: "Hyper Coaster", desc: "The fastest rollercoaster in the Middle East — up to 120 km/h with mind-blowing loops.", tag: "Extreme", tagColor: "bg-red-100 text-red-600", paid: true },
        { emoji: "🗼", name: "Drop Tower", desc: "A free fall from 60 meters high — a breathtaking experience for adrenaline junkies.", tag: "Thrill", tagColor: "bg-orange-100 text-orange-600", paid: false },
        { emoji: "🌊", name: "Jungle Flume", desc: "Ride wooden logs and experience a sudden splash into a giant lake from high up.", tag: "Water", tagColor: "bg-cyan-100 text-cyan-600", paid: false },
        { emoji: "🎡", name: "Capital Eye", desc: "Enjoy a magical panoramic view of the entire park from 80 meters high.", tag: "Family", tagColor: "bg-blue-100 text-blue-600", paid: false },
        { emoji: "💥", name: "Bumper Cars", desc: "The electric car arena — limitless fun for youths and families alike.", tag: "Fun", tagColor: "bg-amber-100 text-amber-600", paid: false },
        { emoji: "🎠", name: "Royal Carousel", desc: "A classic horse carousel with bright colors and calm music — perfect for kids.", tag: "Kids", tagColor: "bg-rose-100 text-rose-600", paid: false },
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
    </section>
  );
}
