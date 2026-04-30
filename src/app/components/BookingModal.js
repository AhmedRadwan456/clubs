"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CheckCircle2, QrCode, X, Baby } from "lucide-react";

function generateTicketId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const seg = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `AW-${seg()}-${seg()}`;
}

export default function BookingModal({ initialData, onClose, lang }) {
  const defaultType = initialData?.type || "arab";
  const defaultPkg = initialData?.packageId || "basic";

  const [step, setStep] = useState("booking");
  const [visitorType, setVisitorType] = useState(defaultType);
  const [packageId, setPackageId] = useState(defaultPkg);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [ticketId] = useState(generateTicketId);

  useEffect(() => {
    if (initialData?.type) setVisitorType(initialData.type);
    if (initialData?.packageId) setPackageId(initialData.packageId);
  }, [initialData]);

  const confirm = () => setStep("confirmed");

  const dict = {
    ar: {
      title: "إتمام الحجز",
      subtitle: "حدد تفاصيل تذكرتك وعدد الأفراد",
      arab: "🌙 زائر عربي",
      foreign: "🌍 زائر أجنبي",
      pkg1: "باقة الدخول الأساسية",
      pkg2: "باقة المغامر (+3 ألعاب مدفوعة)",
      pkg3: "باقة البطل (+5 ألعاب مدفوعة)",
      pkg4: "باقة VIP الشاملة",
      adults: "بالغين",
      children: "أطفال (أقل من ١٠)",
      currency: "ج.م",
      perPerson: "للفرد",
      perChild: "للطفل",
      total: "الإجمالي",
      confirmBtn: "تأكيد وإصدار التذكرة 🎟️",
      ready: "تذكرتك جاهزة!",
      readySub: "أظهرها عند بوابة الدخول",
      pass: "Adventure World Pass",
      visitorsLabel: "عدد الأفراد",
      amountLabel: "المبلغ المدفوع",
      validityLabel: "صلاحية التذكرة",
      validityValue: "يوم كامل",
      adultsWord: "بالغين",
      childrenWord: "أطفال",
      done: "تمام ✓",
      packageConfig: {
        arab: {
          "basic": { adult: 350, child: 200, name: "الدخول الأساسية" },
          "3-rides": { adult: 550, child: 350, name: "المغامر (3 ألعاب)" },
          "5-rides": { adult: 750, child: 450, name: "البطل (5 ألعاب)" },
          "vip": { adult: 1000, child: 650, name: "VIP الشاملة" }
        },
        foreigner: {
          "basic": { adult: 700, child: 450, name: "Basic Entry" },
          "3-rides": { adult: 1000, child: 700, name: "Adventurer (3 Rides)" },
          "5-rides": { adult: 1300, child: 900, name: "Hero (5 Rides)" },
          "vip": { adult: 1900, child: 1300, name: "VIP All-Inclusive" }
        }
      }
    },
    en: {
      title: "Complete Booking",
      subtitle: "Select ticket details and number of visitors",
      arab: "🌙 Arab",
      foreign: "🌍 International",
      pkg1: "Basic Entry",
      pkg2: "Adventurer (+3 Premium Rides)",
      pkg3: "Hero (+5 Premium Rides)",
      pkg4: "VIP All-Inclusive",
      adults: "Adults",
      children: "Children (< 10)",
      currency: "EGP",
      perPerson: "/ person",
      perChild: "/ child",
      total: "Total",
      confirmBtn: "Confirm & Issue Ticket 🎟️",
      ready: "Ticket Ready!",
      readySub: "Show this at the entrance gates",
      pass: "Adventure World Pass",
      visitorsLabel: "Visitors",
      amountLabel: "Amount Paid",
      validityLabel: "Validity",
      validityValue: "Full Day",
      adultsWord: "Adults",
      childrenWord: "Children",
      done: "Done ✓",
      packageConfig: {
        arab: {
          "basic": { adult: 350, child: 200, name: "Basic Entry" },
          "3-rides": { adult: 550, child: 350, name: "Adventurer (3 Rides)" },
          "5-rides": { adult: 750, child: 450, name: "Hero (5 Rides)" },
          "vip": { adult: 1000, child: 650, name: "VIP All-Inclusive" }
        },
        foreigner: {
          "basic": { adult: 700, child: 450, name: "Basic Entry" },
          "3-rides": { adult: 1000, child: 700, name: "Adventurer (3 Rides)" },
          "5-rides": { adult: 1300, child: 900, name: "Hero (5 Rides)" },
          "vip": { adult: 1900, child: 1300, name: "VIP All-Inclusive" }
        }
      }
    }
  };

  const t = dict[lang];
  const currentPrices = t.packageConfig[visitorType][packageId];
  const totalAmount = (adults * currentPrices.adult) + (children * currentPrices.child);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={step === "confirmed" ? onClose : undefined}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
          <X className="w-4 h-4 text-slate-500" />
        </button>

        <AnimatePresence mode="wait">
          {step === "booking" && (
            <motion.div key="booking" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8">
              <div className="mb-6">
                <span className="text-3xl">🎟️</span>
                <h2 className="text-2xl font-black mt-2">{t.title}</h2>
                <p className="text-slate-400 text-sm mt-1">{t.subtitle}</p>
              </div>

              <div className="space-y-3 mb-6">
                <select 
                  value={visitorType} 
                  onChange={(e) => setVisitorType(e.target.value)}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="arab">{t.arab}</option>
                  <option value="foreigner">{t.foreign}</option>
                </select>

                <select 
                  value={packageId} 
                  onChange={(e) => setPackageId(e.target.value)}
                  className="w-full p-4 bg-indigo-50 border-2 border-indigo-100 rounded-2xl font-bold text-indigo-700 outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="basic">{t.pkg1}</option>
                  <option value="3-rides">{t.pkg2}</option>
                  <option value="5-rides">{t.pkg3}</option>
                  <option value="vip">{t.pkg4}</option>
                </select>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div>
                    <div className="font-bold flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" /> {t.adults}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{currentPrices.adult} {t.currency} {t.perPerson}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold hover:bg-slate-100">−</button>
                    <span className="font-black text-lg w-4 text-center">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold hover:bg-slate-700">+</button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-2xl">
                  <div>
                    <div className="font-bold text-amber-900 flex items-center gap-2">
                      <Baby className="w-4 h-4 text-amber-500" /> {t.children}
                    </div>
                    <div className="text-xs text-amber-600 mt-1">{currentPrices.child} {t.currency} {t.perChild}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full bg-white border border-amber-200 text-amber-600 flex items-center justify-center font-bold hover:bg-amber-100">−</button>
                    <span className="font-black text-lg w-4 text-center text-amber-700">{children}</span>
                    <button onClick={() => setChildren(children + 1)} className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold hover:bg-amber-600">+</button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-5 bg-indigo-600 text-white rounded-2xl mb-4 shadow-xl shadow-indigo-200">
                <span className="font-semibold text-white/80">{t.total}</span>
                <span className="text-2xl font-black">{totalAmount.toLocaleString()} {t.currency}</span>
              </div>

              <button
                onClick={confirm}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95"
              >
                {t.confirmBtn}
              </button>
            </motion.div>
          )}

          {step === "confirmed" && (
            <motion.div key="ticket" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8">
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10, delay: 0.1 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-100"
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-black">{t.ready}</h2>
                <p className="text-slate-400 text-sm mt-1">{t.readySub}</p>
              </div>

              <div className={`relative rounded-3xl p-6 text-white overflow-hidden mb-6 bg-gradient-to-br ${packageId === 'vip' ? 'from-amber-500 to-orange-500' : 'from-indigo-600 to-purple-700'}`}>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">{t.pass}</p>
                      <h3 className="text-xl font-black mt-0.5">{currentPrices.name}</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-xl text-xl">🎡</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{t.visitorsLabel}</p>
                      <p className="font-bold">{adults} {t.adultsWord} {children > 0 && `، ${children} ${t.childrenWord}`}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{t.amountLabel}</p>
                      <p className="font-bold">{totalAmount.toLocaleString()} {t.currency}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-white/50 text-xs mb-0.5">{t.validityLabel}</p>
                      <p className="font-bold">{new Date().toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US")} — {t.validityValue}</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed border-white/30 pt-4 flex flex-col items-center">
                    <div className="bg-white p-3 rounded-2xl mb-2">
                      <QrCode className="w-24 h-24 text-indigo-800" />
                    </div>
                    <p className="text-white/50 text-[10px] font-mono">{ticketId}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={onClose} className="w-full py-3.5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg text-sm">
                  {t.done}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
