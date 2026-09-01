"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/923701132411?text=Hello%20Jafri%20Enterprises%2C%20I%20would%20like%20to%20inquire%20about%20your%20leather%20products.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:right-6 z-50 flex items-center gap-2 group cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block px-3 py-1.5 rounded-full bg-[#1A0E07] text-[#FAF6F0] text-xs font-semibold shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-[#D4B296]/30">
        Chat on WhatsApp
      </span>

      {/* Round Button */}
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 border-2 border-white/80 transition-transform duration-300">
        {/* Subtle ping ring - suppressed on reduced motion */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75 -z-10 motion-reduce:hidden" />

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.775.979-.95 1.18-.175.2-.35.225-.65.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.628-.925-2.228-.244-.585-.492-.505-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.027-1.05 2.504 0 1.478 1.075 2.902 1.225 3.102.15.2 2.115 3.23 5.124 4.53 3.01 1.3 3.01.867 3.56.812.55-.054 1.78-.727 2.03-1.429.25-.701.25-1.302.175-1.428-.075-.125-.275-.2-.575-.35z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.004 2C6.48 2 2 6.478 2 12c0 1.95.56 3.77 1.528 5.312L2 22l4.836-1.502A9.957 9.957 0 0012.004 22C17.528 22 22 17.522 22 12c0-5.522-4.472-10-9.996-10zm0 18.232a8.212 8.212 0 01-4.22-1.164l-.302-.18-2.868.891.89-2.798-.196-.312A8.225 8.225 0 013.784 12c0-4.533 3.687-8.22 8.22-8.22 4.534 0 8.22 3.687 8.22 8.22 0 4.533-3.686 8.232-8.22 8.232z"
          />
        </svg>
      </div>
    </motion.a>
  );
}
