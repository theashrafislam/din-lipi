import { FiHome, FiBarChart2, FiEdit, FiSettings, FiPlus } from "react-icons/fi";

export default function Navbar({ tab, setTab, onAdd }) {
  const tabs = [
    { key: "home", icon: <FiHome size={24} /> },
    { key: "stats", icon: <FiBarChart2 size={24} /> },
    { key: "journal", icon: <FiEdit size={24} /> },
    { key: "settings", icon: <FiSettings size={24} /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg flex justify-between items-center bg-white/30 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-3 shadow-xl z-50">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setTab(t.key)}
          className="relative flex-1 flex flex-col items-center justify-center"
        >
          <div
            className={`flex flex-col items-center justify-center transition-all duration-200 ${tab === t.key ? "text-purple-500" : "text-gray-700 dark:text-gray-300"
              }`}
          >
            {t.icon}
            {/* Active tab indicator */}
            <span
              className={`mt-1 w-2 h-2 rounded-full transition-all duration-200 ${tab === t.key ? "bg-purple-500 scale-100" : "bg-transparent scale-0"
                }`}
            ></span>
          </div>
        </button>
      ))}

      {/* Center FAB Add Button */}
      {/* <button
        onClick={onAdd}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 hover:bg-purple-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-150 active:scale-95"
      >
        <FiPlus size={28} />
      </button> */}
    </div>
  );
}