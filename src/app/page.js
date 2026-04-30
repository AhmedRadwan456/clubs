"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RidesSection from "./components/RidesSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialTicketType, setInitialTicketType] = useState(null);
  
  // Set default language to Arabic
  const [lang, setLang] = useState("ar");

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const openBooking = (data = null) => {
    setInitialTicketType(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar onBookNow={() => openBooking()} lang={lang} setLang={setLang} />

      <main className="relative overflow-x-hidden pt-10 z-10">
        <HeroSection onBookNow={() => openBooking()} lang={lang} />
        <RidesSection lang={lang} />
        <FeaturesSection lang={lang} />
        <PricingSection onBook={openBooking} lang={lang} />
        <Footer lang={lang} />
      </main>

      <AnimatePresence>
        {modalOpen && (
          <BookingModal
            initialData={initialTicketType}
            onClose={closeModal}
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* Background is now in HeroSection */}
      <div className="fixed inset-0 bg-slate-50 z-[-2]" />

      {/* Background decorative blobs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />
      </div>
    </>
  );
}
