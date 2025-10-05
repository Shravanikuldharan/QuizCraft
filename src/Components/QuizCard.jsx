import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import Button from "./Button";

function QuestionCard({
  questionData,
  currentIndex,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  onNext,
  onPrevious,
  onSubmit,
  language,
}) {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    setTimeLeft(30);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onNext();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-6 border-2 border-transparent transition-all duration-500 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6">
        {language.toUpperCase()} Quiz
      </h2>

      <div className="absolute top-4 right-6 text-purple-800 font-semibold bg-purple-100 px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
        <FaClock /> {timeLeft}s
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-black">
        {currentIndex + 1}. {questionData.question}
      </h3>

      <div className="flex flex-col gap-4 mb-6">
        {questionData.options.map((option, id) => (
          <button
            key={id}
            onClick={() => onOptionSelect(option)}
            className={`
              flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-green-600 transition
              font-medium text-black text-left
              ${selectedOption === option ? "bg-purple-200 border-purple-400" : ""}
            `}
          >
            <span className="font-bold">{optionLabels[id]}.</span> {option}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          text="Previous"
          onClick={onPrevious}
          bgColor="bg-purple-200"
          textColor="text-purple-900"
          hoverColor="hover:bg-purple-300"
          disabled={currentIndex === 0}
        />
        {currentIndex < totalQuestions - 1 ? (
          <Button
            text="Next"
            onClick={onNext}
            bgColor="bg-pink-200"
            textColor="text-pink-900"
            hoverColor="hover:bg-pink-300"
          />
        ) : (
          <Button
            text="Submit"
            onClick={onSubmit}
            bgColor="bg-green-300"
            textColor="text-green-900"
            hoverColor="hover:bg-green-400"
          />
        )}
      </div>
    </div>
  );
}

export default QuestionCard;