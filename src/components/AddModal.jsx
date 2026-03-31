import { motion } from "framer-motion";
import { useState } from "react";

export default function AddModal({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleAdd = () => {
    if (!title || !duration) return;

    onAdd({
      title: title.trim(),
      duration: parseInt(duration),
      time: new Date().toISOString(),
    });

    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 w-80 shadow-xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-600 dark:text-zinc-300 hover:text-red-500 transition-colors text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">
          Add New Activity
        </h2>

        {/* Title Input */}
        <input
          className="w-full p-3 mb-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 placeholder:text-zinc-400 text-zinc-900 dark:text-white"
          placeholder="Activity name (e.g., Kanji practice)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Duration Input */}
        <input
          type="number"
          className="w-full p-3 mb-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 placeholder:text-zinc-400 text-zinc-900 dark:text-white"
          placeholder="Duration in minutes (e.g., 30)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-3 font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform"
        >
          Add Activity
        </button>
      </motion.div>
    </motion.div>
  );
}