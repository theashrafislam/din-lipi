import { FiHome, FiBarChart2, FiEdit, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const tabs = [
    { path: "/", icon: <FiHome size={22} /> },
    { path: "/stats", icon: <FiBarChart2 size={22} /> },
    { path: "/journal", icon: <FiEdit size={22} /> },
    { path: "/settings", icon: <FiSettings size={22} /> },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg flex justify-between items-center 
    bg-white/30 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-3 shadow-xl z-50">

      {tabs.map((t) => (
        <NavLink
          key={t.path}
          to={t.path}
          className="flex-1 flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <div
              className={`flex flex-col items-center transition-all duration-200 
              ${isActive ? "text-purple-500" : "text-gray-700 dark:text-gray-300"}`}
            >
              {t.icon}

              {/* Active dot */}
              <span
                className={`mt-1 w-1.5 h-1.5 rounded-full transition-all duration-200 
                ${isActive ? "bg-purple-500 scale-100" : "scale-0"}`}
              />
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}