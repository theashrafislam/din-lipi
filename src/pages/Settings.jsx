import { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("system"); // light / dark / system
  const [dailyGoal, setDailyGoal] = useState(120);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("বাংলা");

  const handleReset = () => {
    if (window.confirm("আপনি কি সব ডেটা মুছে দিতে চান?")) {
      localStorage.clear();
      alert("সব ডেটা মুছে ফেলা হয়েছে!");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">সেটিংস</h2>

      {/* Theme */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 mb-4 shadow-sm border border-gray-200 dark:border-gray-700">
        <label className="block text-gray-800 dark:text-gray-200 mb-1 font-medium">থিম</label>
        <select
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-800"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">লাইট</option>
          <option value="dark">ডার্ক</option>
          <option value="system">সিস্টেম</option>
        </select>
      </div>

      {/* Daily Goal */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 mb-4 shadow-sm border border-gray-200 dark:border-gray-700">
        <label className="block text-gray-800 dark:text-gray-200 mb-1 font-medium">দৈনিক লক্ষ্য (মিনিট)</label>
        <input
          type="number"
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-800"
          value={dailyGoal}
          onChange={(e) => setDailyGoal(parseInt(e.target.value))}
        />
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 mb-4 shadow-sm border border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <span className="text-gray-800 dark:text-gray-200 font-medium">নোটিফিকেশন</span>
        <input
          type="checkbox"
          className="w-6 h-6 accent-purple-500"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>

      {/* Language */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 mb-4 shadow-sm border border-gray-200 dark:border-gray-700">
        <label className="block text-gray-800 dark:text-gray-200 mb-1 font-medium">ভাষা</label>
        <select
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-800"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="বাংলা">বাংলা</option>
          <option value="English">English</option>
          <option value="日本語">日本語</option>
        </select>
      </div>

      {/* Reset Data */}
      <button
        onClick={handleReset}
        className="w-full mt-6 p-3 rounded-xl bg-red-500 text-white font-medium"
      >
        সব ডেটা মুছুন
      </button>

      {/* App Version */}
      <div className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
        App Version 1.0.0
      </div>
    </div>
  );
}