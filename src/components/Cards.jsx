import { useState, useEffect } from "react";

const examData = [
  { id: 1, text: "Exam 1: Math" },
  { id: 2, text: "Exam 2: English" },
  { id: 3, text: "Exam 3: Science" },
  { id: 4, text: "Exam 4: History" },
  { id: 5, text: "Exam 5: Geography" },
  { id: 6, text: "Exam 6: Computer" },
];

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index >= examData.length) {
        clearInterval(interval);
        return;
      }
      // 2 cards add korbo
      setVisibleCards((prev) => [
        ...prev,
        ...examData.slice(index, index + 2),
      ]);
      index += 2;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {visibleCards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center text-center text-lg font-semibold"
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

export default Cards;