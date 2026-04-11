import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const target = new Date("2026-07-05T00:00:00");

export default function Countdown() {
  const [time, setTime] = useState(getTime());
  const [open, setOpen] = useState(false);

  function getTime() {
    const diff = target - new Date();
    return {
      দিন: Math.floor(diff / (1000 * 60 * 60 * 24)),
      ঘন্টা: Math.floor(diff / (1000 * 60 * 60)) % 24,
      মিনিট: Math.floor(diff / (1000 * 60)) % 60,
      সেকেন্ড: Math.floor(diff / 1000) % 60,
    };
  }

  function toBanglaNumber(num) {
    const banglaDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
    return num.toString().split("").map(d => banglaDigits[d] ?? d).join("");
  }

  useEffect(() => {
    const i = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header / Toggle */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-2xl 
        bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl 
        border border-white/30 dark:border-white/10 
        shadow-md hover:shadow-lg transition-all"
      >
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Countdown
          </span>
          <span className="text-sm font-semibold text-gray-800 dark:text-white">
            ⏳ আর {toBanglaNumber(time.দিন)} দিন বাকি
          </span>
        </div>

        {/* Chevron Icon */}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-gray-600 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-4"
          >
            <div className="flex justify-between gap-3 p-4 rounded-3xl 
            bg-gradient-to-br from-zinc-100/80 to-zinc-200/60 
            dark:from-zinc-900/80 dark:to-black/70 
            backdrop-blur-xl border border-white/20 shadow-xl">

              {Object.entries(time).map(([label, value]) => (
                <motion.div
                  key={label}
                  layout
                  className="flex flex-col items-center justify-center flex-1 h-24 
                  rounded-2xl bg-white/40 dark:bg-white/5 
                  border border-white/20 shadow-inner"
                >
                  <motion.div
                    key={value}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {toBanglaNumber(value)}
                  </motion.div>

                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {label}
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}