import { motion, AnimatePresence } from "framer-motion";

export default function Timeline({ items, onDelete }) {
  return (
    <div className="space-y-3">
      <AnimatePresence>
        {items.map((item, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white/10 rounded-2xl p-3 flex justify-between"
          >
            <div>
              <div>{item.title}</div>
              <div className="text-xs opacity-60">
                {item.duration} min
              </div>
            </div>
            <button onClick={() => onDelete(i)}>✕</button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}