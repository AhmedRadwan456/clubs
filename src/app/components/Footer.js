"use client";
import { Sparkles, MapPin, Phone, Mail, Clock, Globe2, Share2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-xl">
                🎡
              </div>
              <div>
                <div className="font-black text-lg leading-tight">Adventure World</div>
                <div className="text-xs text-slate-400 font-medium">ملاهي عالمية</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              مدينة الملاهي العالمية في قلب العاصمة الإدارية الجديدة — تجارب ترفيهية استثنائية لجميع الأعمار.
            </p>
            <div className="flex gap-3 mt-6">
              {[Heart, Globe2, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-5">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {["المناطق الثيماتية", "أسعار التذاكر", "خريطة المتنزه", "معلومات السلامة", "حجز المجموعات", "الأسئلة الشائعة"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-5">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>العاصمة الإدارية الجديدة — على طريق السويس الصحراوي، ٤٥ كم شرق القاهرة</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>+20 15 0000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>info@adventureworld.eg</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>يومياً: ١٠ صباحاً – ١١ مساءً</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 Adventure World — ملاهي عالمية. جميع الحقوق محفوظة.</p>
          <p className="text-slate-600">العاصمة الإدارية الجديدة — مصر</p>
        </div>
      </div>
    </footer>
  );
}
