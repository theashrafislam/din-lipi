import { motion } from "framer-motion";
import { FiHome, FiBarChart2, FiEdit, FiSettings, FiPlus } from "react-icons/fi";

export default function Navbar({ tab, setTab, onAdd }) {
  const tabs = [
    { key: "home", icon: <FiHome size={24} /> },
    { key: "stats", icon: <FiBarChart2 size={24} /> },
    { key: "journal", icon: <FiEdit size={24} /> },
    { key: "settings", icon: <FiSettings size={24} /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg flex justify-between items-center bg-white/20 dark:bg-black/30 backdrop-blur-xl rounded-3xl p-3 shadow-xl z-50">
      {tabs.map((t, i) => (
        <button
          key={t.key}
          onClick={() => setTab(t.key)}
          className="relative flex-1 flex justify-center items-center"
        >
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300"
          >
            {t.icon}
            {/* Active indicator */}
            {tab === t.key && (
              <motion.div
                layoutId="activeTab"
                className="w-2 h-2 bg-purple-500 rounded-full mt-1"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </motion.div>
        </button>
      ))}

      {/* Center FAB Add Button */}
      <button
        onClick={onAdd}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 hover:bg-purple-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl"
      >
        <motion.div whileTap={{ scale: 0.9 }}>
          <FiPlus size={28} />
        </motion.div>
      </button>
    </div>
  );
}