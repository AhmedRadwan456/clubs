"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, Users, CheckCircle2, QrCode, X } from "lucide-react";

const prices = { arab: 200, foreigner: 500 };

function generateTicketId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const seg = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `AW-${seg()}-${seg()}`;
}

export default function BookingModal({ initialType, onClose }) {
  const [step, setStep] = useState(initialType ? "quantity" : "type");
  const [ticketType, setTicketType] = useState(initialType || null);
  const [quantity, setQuantity] = useState(1);
  const [ticketId] = useState(generateTicketId);

  const selectType = (type) => { setTicketType(type); setStep("quantity"); };
  const confirm = () => setStep("confirmed");
  const total = ticketType ? prices[ticketType] * quantity : 0;

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
          {/* STEP 1: type */}
          {step === "type" && (
            <motion.div key="type" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8">
              <div className="mb-8">
                <span className="text-3xl">🎟️</span>
                <h2 className="text-2xl font-black mt-2">اختر نوع التذكرة</h2>
                <p className="text-slate-400 text-sm mt-1">حدد فئة الزائر المناسبة لك</p>
              </div>
              <div className="space-y-4">
                <button
                  onClick={() => selectType("arab")}
                  className="group w-full flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-100 transition-all text-left"
                >
                  <div>
                    <div className="font-black text-lg">🌙 زائر عربي</div>
                    <div className="text-sm text-slate-400">للمصريين والعرب والمقيمين</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400 mb-0.5">من</div>
                    <div className="text-2xl font-black text-indigo-600">٢٠٠ ج.م</div>
                    <div className="text-xs text-slate-400">/ فرد</div>
                  </div>
                </button>
                <button
                  onClick={() => selectType("foreigner")}
                  className="group w-full flex items-center justify-between p-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white hover:from-indigo-700 hover:to-purple-700 transition-all text-left shadow-xl shadow-indigo-200"
                >
                  <div>
                    <div className="font-black text-lg">🌍 International Visitor</div>
                    <div className="text-sm text-white/70">For international tourists</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/60 mb-0.5">from</div>
                    <div className="text-2xl font-black">٥٠٠ ج.م</div>
                    <div className="text-xs text-white/70">/ person</div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: quantity */}
          {step === "quantity" && (
            <motion.div key="qty" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-8">
              <button onClick={() => setStep("type")} className="text-sm text-indigo-500 font-semibold mb-6 flex items-center gap-1 hover:gap-2 transition-all">
                ← تغيير نوع التذكرة
              </button>
              <div className="mb-8">
                <span className="text-2xl">{ticketType === "arab" ? "🌙" : "🌍"}</span>
                <h2 className="text-2xl font-black mt-2">كم عدد الزوار؟</h2>
                <p className="text-slate-400 text-sm mt-1">
                  تذكرة {ticketType === "arab" ? "عربي" : "أجنبي"} · {prices[ticketType]} ج.م للفرد
                </p>
              </div>

              <div className="flex items-center justify-center gap-8 py-8 bg-slate-50 rounded-2xl mb-6">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-2xl font-bold hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                >−</button>
                <div className="text-center">
                  <div className="text-6xl font-black text-indigo-600">{quantity}</div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 justify-center">
                    <Users className="w-3 h-3" /> {quantity > 1 ? "أفراد" : "فرد"}
                  </div>
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >+</button>
              </div>

              <div className="flex justify-between items-center p-5 bg-indigo-50 rounded-2xl mb-6">
                <span className="font-semibold text-slate-600">الإجمالي</span>
                <span className="text-2xl font-black text-indigo-600">{total.toLocaleString()} ج.م</span>
              </div>

              <button
                onClick={confirm}
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
              >
                تأكيد وإصدار التذكرة 🎟️
              </button>
            </motion.div>
          )}

          {/* STEP 3: ticket */}
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
                <h2 className="text-2xl font-black">تذكرتك جاهزة!</h2>
                <p className="text-slate-400 text-sm mt-1">أظهرها عند بوابة الدخول</p>
              </div>

              {/* Ticket */}
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white overflow-hidden mb-6">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Adventure World Pass</p>
                      <h3 className="text-xl font-black mt-0.5">تذكرة دخول رسمية</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-xl text-xl">🎡</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">نوع التذكرة</p>
                      <p className="font-bold">{ticketType === "arab" ? "🌙 عربي" : "🌍 أجنبي"}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">عدد الأفراد</p>
                      <p className="font-bold">{quantity} {quantity > 1 ? "أفراد" : "فرد"}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">المبلغ المدفوع</p>
                      <p className="font-bold">{total.toLocaleString()} ج.م</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">التاريخ</p>
                      <p className="font-bold">{new Date().toLocaleDateString("ar-EG")}</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed border-white/30 pt-4 flex flex-col items-center">
                    <div className="bg-white p-3 rounded-2xl mb-2">
                      <QrCode className="w-24 h-24 text-indigo-800" />
                    </div>
                    <p className="text-white/50 text-[10px] font-mono">{ticketId}</p>
                    <p className="text-white/40 text-[9px] mt-1">العاصمة الإدارية الجديدة — مصر</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={onClose} className="w-full py-3.5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 text-sm">
                  تمام ✓
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
