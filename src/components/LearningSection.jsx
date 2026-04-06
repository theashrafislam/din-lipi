import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock } from "react-icons/fa";

const sections = [
  { title: "হিরাগানা", key: "hiragana", locked: true },
  { title: "কাতাকানা", key: "katakana", locked: true },
  { title: "ভোকাবুলারি", key: "words", locked: false },
];

const lessons = Array.from({ length: 25 }, (_, i) => `Lesson ${i + 1}`);

export default function LearningSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    // ❌ locked হলে কিছুই হবে না
    if (section.locked) return;

    setOpenSection(openSection === section.key ? null : section.key);
  };

  return (
    <section className="w-full max-w-4xl mx-auto mt-8 px-4">

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        শেখা শুরু
      </h2>

      <div className="space-y-3">

        {sections.map((section) => (
          <div key={section.key}>

            {/* Section Card */}
            <motion.div
              onClick={() => toggleSection(section)}
              whileTap={!section.locked ? { scale: 0.98 } : {}}
              className={`flex justify-between items-center rounded-2xl px-4 py-4 border backdrop-blur-xl shadow-sm
              
              ${
                section.locked
                  ? "bg-white/20 dark:bg-white/5 border-white/10 cursor-not-allowed opacity-70"
                  : "bg-white/30 dark:bg-white/5 border-white/20 cursor-pointer"
              }
              
              `}
            >
              <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                {section.title}

                {section.locked && (
                  <FaLock className="text-sm opacity-70" />
                )}
              </span>

              {!section.locked && (
                <span className="text-gray-600 dark:text-gray-300 text-lg">
                  {openSection === section.key ? "−" : "+"}
                </span>
              )}
            </motion.div>

            {/* Lessons শুধুমাত্র unlocked section এর জন্য */}
            <AnimatePresence>
              {!section.locked && openSection === section.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">

                    {lessons.map((lesson, index) => (
                      <motion.div
                        key={lesson}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-xl py-3 text-center text-sm sm:text-base shadow-sm border backdrop-blur-md bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white border-white/20 cursor-pointer"
                      >
                        {lesson}
                      </motion.div>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>
    </section>
  );
}