"use client";

import { FiMessageCircle } from "react-icons/fi";

const whatsappUrl = "https://wa.me/919511630795";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-gold transition hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-gold-500/30"
    >
      <FiMessageCircle className="text-white" size={22} />
    </a>
  );
}

