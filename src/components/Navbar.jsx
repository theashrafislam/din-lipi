import { motion } from "framer-motion";

export default function Navbar({ tab, setTab }) {
  const tabs = ["home", "stats", "journal", "settings"];

  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white/10 backdrop-blur-xl p-3">
      {tabs.map((t) => (
        <button key={t} onClick={() => setTab(t)}>
          <motion.div whileTap={{ scale: 0.9 }}>
            {t}
          </motion.div>
        </button>
      ))}
    </div>
  );
}