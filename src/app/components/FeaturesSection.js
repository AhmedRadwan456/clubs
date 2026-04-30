"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Smile, Wifi, Baby, Camera } from "lucide-react";

export default function FeaturesSection({ lang }) {
  const dict = {
    ar: {
      badge: "⭐ لماذا Adventure World؟",
      title1: "تجربة",
      title2: "متكاملة",
      title3: "لكل الأسرة",
      desc: "لا نقدم ملاهي فقط — نقدم وجهة ترفيهية متكاملة بمعايير عالمية",
      features: [
        { icon: ShieldCheck, title: "سلامة 100%", desc: "فحص يومي لجميع الألعاب وفق معايير IAAPA الدولية مع فرق إنقاذ متواجدة على مدار الساعة.", color: "text-green-500 bg-green-50" },
        { icon: Clock,       title: "يومياً 10 ص – 11 م", desc: "مفتوح 320 يوم في السنة — في المواسم والعطلات والإجازات.", color: "text-indigo-500 bg-indigo-50" },
        { icon: Baby,        title: "منطقة الأطفال", desc: "ألعاب آمنة ومدروسة مع مشرفين متخصصين للأطفال من 3 إلى 12 سنة.", color: "text-pink-500 bg-pink-50" },
        { icon: Smile,       title: "ألعاب لكل الأعمار", desc: "من الألعاب الهادئة للعائلات إلى الأفعونيات المثيرة للشباب — في مكان واحد.", color: "text-amber-500 bg-amber-50" },
        { icon: Camera,      title: "أمن وحراسة كاملة", desc: "200 كاميرا مراقبة ذكية وفرق أمن منتشرة في جميع أنحاء المتنزه.", color: "text-violet-500 bg-violet-50" },
        { icon: Wifi,        title: "واي فاي مجاني", desc: "تغطية إنترنت عالية السرعة في كل ركن من المتنزه طوال اليوم.", color: "text-sky-500 bg-sky-50" },
      ]
    },
    en: {
      badge: "⭐ Why Adventure World?",
      title1: "A",
      title2: "Complete",
      title3: "Experience for the Whole Family",
      desc: "We don't just offer rides — we provide a complete entertainment destination with global standards",
      features: [
        { icon: ShieldCheck, title: "100% Safety", desc: "Daily inspection of all rides meeting IAAPA international standards with rescue teams available 24/7.", color: "text-green-500 bg-green-50" },
        { icon: Clock,       title: "Daily 10 AM – 11 PM", desc: "Open 320 days a year — including all seasons, weekends, and holidays.", color: "text-indigo-500 bg-indigo-50" },
        { icon: Baby,        title: "Kids Zone", desc: "Safe, carefully designed rides with specialized supervisors for children aged 3 to 12.", color: "text-pink-500 bg-pink-50" },
        { icon: Smile,       title: "Rides for All Ages", desc: "From calm family attractions to extreme rollercoasters for teens — all in one place.", color: "text-amber-500 bg-amber-50" },
        { icon: Camera,      title: "Full Security", desc: "200 smart surveillance cameras and security teams deployed throughout the park.", color: "text-violet-500 bg-violet-50" },
        { icon: Wifi,        title: "Free Wi-Fi", desc: "High-speed internet coverage in every corner of the park all day long.", color: "text-sky-500 bg-sky-50" },
      ]
    }
  };
  const t = dict[lang];

  return (
    <section id="features" className="py-24 bg-slate-50/70">
      <div className="px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-widest">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t.title1} <span className="gradient-text">{t.title2}</span> {t.title3}
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-lg">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug">{f.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
