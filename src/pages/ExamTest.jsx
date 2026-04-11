import React, { useState } from "react";
import { vocabularyLessons } from "../data/lessons";

const ExamTest = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    // টেস্ট শুরু করা
    const startTest = (lesson) => {
        setSelectedLesson(lesson);
        setCurrentQ(0);
        setScore(0);
        setFinished(false);
    };

    // উত্তর যাচাই
    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        const nextQ = currentQ + 1;

        if (nextQ < selectedLesson.words.length) {
            setCurrentQ(nextQ);
        } else {
            setFinished(true);
        }
    };

    // আবার শুরু করা
    const resetTest = () => {
        setSelectedLesson(null);
        setCurrentQ(0);
        setScore(0);
        setFinished(false);
    };

    // কোনো লেসন সিলেক্ট করা হয়নি
    if (!selectedLesson) {
        return (
            <div className="px-4">
                <h1 className="text-2xl font-bold mb-4">
                    📚 শব্দ ভাণ্ডার পরীক্ষা
                </h1>

                <p className="mb-4 text-gray-600">
                    নিচে থেকে একটি লেসন সিলেক্ট করো এবং পরীক্ষা শুরু করো
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {vocabularyLessons.map((lesson) => (
                        <div
                            key={lesson.id}
                            onClick={() => startTest(lesson)}
                            className="cursor-pointer p-4 rounded-xl shadow bg-white hover:bg-blue-50 transition"
                        >
                            <h2 className="font-semibold">{lesson.title}</h2>
                            <p className="text-sm text-gray-500">
                                {lesson.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // টেস্ট শেষ হয়ে গেলে
    if (finished) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">
                    🎉 পরীক্ষা শেষ হয়েছে
                </h1>

                <p className="text-lg mb-2">
                    তোমার প্রাপ্ত নম্বর:{" "}
                    <b>
                        {score} / {selectedLesson.words.length}
                    </b>
                </p>

                <p className="text-gray-600 mb-4">
                    ভালো কাজ! আবার চেষ্টা করতে পারো
                </p>

                <button
                    onClick={resetTest}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    আবার পরীক্ষা দাও
                </button>
            </div>
        );
    }

    const word = selectedLesson.words[currentQ];

    // MCQ অপশন (ডেমো)
    const options = [
        word.meaning,
        "বিড়াল",
        "গাছ",
        "পানি",
    ].sort(() => Math.random() - 0.5);

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-2">
                {selectedLesson.title} — প্রশ্ন {currentQ + 1}
            </h2>

            <p className="text-gray-600 mb-4">
                নিচের জাপানি শব্দটির সঠিক বাংলা অর্থ নির্বাচন করো
            </p>

            <p className="text-2xl font-semibold mb-6 text-center">
                {word.japanese}
            </p>

            <div className="grid gap-3">
                {options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => handleAnswer(opt === word.meaning)}
                        className="p-3 bg-white shadow rounded hover:bg-gray-100"
                    >
                        {opt}
                    </button>
                ))}
            </div>

            <p className="mt-4 text-sm text-gray-500 text-center">
                বর্তমান স্কোর: {score}
            </p>
        </div>
    );
};

export default ExamTest;