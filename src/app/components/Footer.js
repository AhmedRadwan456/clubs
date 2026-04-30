"use client";
import { MapPin, Phone, Mail, Clock, Globe2, Share2, Heart } from "lucide-react";

export default function Footer({ lang }) {
  const dict = {
    ar: {
      brand: "عالم المغامرات",
      brandSub: "ملاهي عالمية",
      desc: "مدينة الملاهي العالمية في قلب العاصمة الإدارية الجديدة — تجربة ترفيهية استثنائية لجميع الأعمار.",
      linksTitle: "روابط سريعة",
      links: ["المناطق الثيماتية", "أسعار التذاكر", "خريطة المتنزه", "إرشادات السلامة", "حجوزات المجموعات", "الأسئلة الشائعة"],
      contactTitle: "تواصل معنا",
      loc: "العاصمة الإدارية الجديدة — طريق السويس الصحراوي، 45 كم شرق القاهرة",
      hours: "يومياً: 10:00 صباحاً – 11:00 مساءً",
      copyright: "© 2025 Adventure World. جميع الحقوق محفوظة.",
      city: "العاصمة الإدارية الجديدة — مصر"
    },
    en: {
      brand: "Adventure World",
      brandSub: "World-Class Theme Park",
      desc: "The global amusement park in the heart of the New Administrative Capital — An exceptional entertainment experience for all ages.",
      linksTitle: "Quick Links",
      links: ["Theme Zones", "Ticket Prices", "Park Map", "Safety Information", "Group Bookings", "FAQs"],
      contactTitle: "Contact Us",
      loc: "New Administrative Capital — Suez Desert Road, 45 km east of Cairo",
      hours: "Daily: 10:00 AM – 11:00 PM",
      copyright: "© 2025 Adventure World. All rights reserved.",
      city: "New Administrative Capital — Egypt"
    }
  };
  const t = dict[lang];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-xl">🎡</div>
              <div>
                <div className="font-black text-lg leading-tight">{t.brand}</div>
                <div className="text-xs text-slate-400 font-medium">{t.brandSub}</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
            <div className="flex gap-3 mt-6">
              {[Heart, Globe2, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-5">{t.linksTitle}</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {t.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-5">{t.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>{t.loc}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span dir="ltr" className={lang === "ar" ? "text-right w-full" : ""}>+20 15 0000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>info@adventureworld.eg</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{t.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{t.copyright}</p>
          <p className="text-slate-600">{t.city}</p>
        </div>
      </div>
    </footer>
  );
}
