"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RidesSection from "./components/RidesSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialTicketType, setInitialTicketType] = useState(null);

  const openBooking = (type = null) => {
    setInitialTicketType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setInitialTicketType(null);
  };

  return (
    <>
      <Navbar onBookNow={() => openBooking()} />

      <main className="bg-[#fdfcff] overflow-x-hidden">
        <HeroSection onBookNow={() => openBooking()} />
        <RidesSection />
        <FeaturesSection />
        <PricingSection onBook={openBooking} />
        <Footer />
      </main>

      <AnimatePresence>
        {modalOpen && (
          <BookingModal
            initialData={initialTicketType}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>

      {/* Background decorative blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl" />
      </div>
    </>
  );
}
