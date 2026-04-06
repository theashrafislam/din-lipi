import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sections = [
  { title: "হিরাগানা", key: "hiragana", locked: true },
  { title: "কাতাকানা", key: "katakana", locked: true },
  { title: "ভোকাবুলারি", key: "words", locked: false },
];

const lessons = Array.from({ length: 25 }, (_, i) => `Lesson ${i + 1}`);

export default function LearningSection() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const toggleSection = (section) => {
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
            <div
              onClick={() => toggleSection(section)}
              className={`flex justify-between items-center rounded-2xl px-4 py-4 border backdrop-blur-xl shadow-sm
                ${
                  section.locked
                    ? "bg-white/20 dark:bg-white/5 border-white/10 cursor-not-allowed opacity-70"
                    : "bg-white/30 dark:bg-white/5 border-white/20 cursor-pointer hover:bg-white/40 dark:hover:bg-white/10 transition"
                }
              `}
            >
              <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                {section.title}
                {section.locked && <FaLock className="text-sm opacity-70" />}
              </span>
              {!section.locked && (
                <span className="text-gray-600 dark:text-gray-300 text-lg">
                  {openSection === section.key ? "−" : "+"}
                </span>
              )}
            </div>

            {/* Lessons for unlocked section */}
            {section.locked === false && openSection === section.key && (
              <div className="overflow-hidden transition-all duration-300 mt-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson}
                      onClick={() => navigate(`/vocabulary-lesson/${index + 1}`)}
                      className="rounded-xl py-3 text-center text-sm sm:text-base shadow-sm border backdrop-blur-md bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white border-white/20 cursor-pointer hover:scale-105 transform transition-all duration-150"
                    >
                      {lesson}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}