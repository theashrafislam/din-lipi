import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const target = new Date("2026-07-05T00:00:00");

export default function Countdown() {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const diff = target - new Date();
    return {
      দিন: Math.floor(diff / (1000 * 60 * 60 * 24)),
      ঘন্টা: Math.floor(diff / (1000 * 60 * 60)) % 24,
      মিনিট: Math.floor(diff / (1000 * 60)) % 60,
      সেকেন্ড: Math.floor(diff / 1000) % 60,
    };
  }

  // Convert English number to Bangla digits
  function toBanglaNumber(num) {
    const banglaDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
    return num.toString().split("").map(d => banglaDigits[d] ?? d).join("");
  }

  useEffect(() => {
    const i = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black p-4">
      {/* Countdown Cards Container */}
      <div className="w-full max-w-3xl mx-auto flex justify-around">
        {Object.entries(time).map(([label, value]) => (
          <motion.div
            key={label}
            layout
            className="flex flex-col items-center justify-center w-20 h-24 sm:w-24 sm:h-28 bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg"
          >
            {/* Animated Number in Bangla */}
            <motion.div
              key={value}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
            >
              {toBanglaNumber(value)}
            </motion.div>

            {/* Label */}
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-1">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}