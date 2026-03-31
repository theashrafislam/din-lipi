import { motion } from "framer-motion";

export default function DailyGoal({ progress = 0, goal = 120 }) {
  // progress = minutes completed
  // goal = daily target in minutes

  const percentage = Math.min((progress / goal) * 100, 100);

  // Convert numbers to Bangla digits
  const toBanglaNumber = (num) => {
    const banglaDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
    return num.toString().split("").map(d => banglaDigits[d] ?? d).join("");
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      {/* Card */}
      <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/20">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg">আজকের লক্ষ্য</h3>
          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
            {toBanglaNumber(progress)} / {toBanglaNumber(goal)} মিনিট
          </span>
        </div>

        {/* Progress Bar Background */}
        <div className="w-full h-4 bg-white/30 dark:bg-white/10 rounded-full overflow-hidden">
          {/* Animated Progress */}
          <motion.div
            className="h-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>

        {/* Motivational Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-sm text-gray-700 dark:text-gray-300 font-medium"
        >
          {percentage < 100
            ? "চেষ্টা চালিয়ে যাও! লক্ষ্য পূর্ণ করতে হবে 🚀"
            : "অভিনন্দন! আজকের লক্ষ্য পূর্ণ হয়েছে 🎉"}
        </motion.div>
      </div>
    </div>
  );
}