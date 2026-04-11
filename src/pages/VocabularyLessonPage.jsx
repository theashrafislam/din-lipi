import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function VocabularyLessonPage({ lessonData }) {
    const { id } = useParams();
    const lesson = lessonData.find((l) => l.id === parseInt(id));

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <p className="text-gray-900 dark:text-white">Lesson পাওয়া যায়নি!</p>
            </div>
        );
    }
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4">

            {/* Header */}
            <div className="max-w-3xl mx-auto mb-3">

                {/* Top Bar */}
                <div className="flex items-center justify-between">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm border border-gray-200 dark:border-white/10 active:scale-95 transition"
                    >
                        <span className="text-lg">←</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Back
                        </span>
                    </button>

                    {/* Optional Right Side (empty for now) */}
                    <div className="w-12"></div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center sm:text-left">
                    {lesson.title}
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-center sm:text-left">
                    {lesson.description}
                </p>
            </div>

            {/* Table */}
            <div className="max-w-3xl mx-auto overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">

                {/* Header Row */}
                <div className="grid grid-cols-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-sm sm:text-base">
                    <div className="p-3 border-r border-gray-300 dark:border-gray-700">
                        জাপানিজ
                    </div>
                    <div className="p-3">
                        বাংলা
                    </div>
                </div>

                {/* Rows */}
                {lesson.words.map((word, index) => (
                    <div
                        key={word.id}
                        className={`grid grid-cols-2 text-sm sm:text-base
            ${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}`}
                    >

                        {/* Japanese */}
                        <div className="p-3 border-t border-r border-gray-300 dark:border-gray-700 font-medium text-gray-900 dark:text-white">
                            {word.japanese}
                        </div>

                        {/* Bangla */}
                        <div className="p-3 border-t border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                            {word.meaning}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}