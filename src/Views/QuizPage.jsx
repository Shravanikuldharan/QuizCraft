import React, { useState, useEffect } from "react";
import HTML from "../Config/HTML";
import C from "../Config/C";
import QuizCard from "../Components/QuizCard";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const selectedLang = localStorage.getItem("selectedLanguage");
    const selectedLevel = localStorage.getItem("selectedLevel");

    let quizData = [];
    if (selectedLang && selectedLevel) {
      setLanguage(selectedLang);
      if (selectedLang === "html") quizData = HTML.html[selectedLevel];
      else if (selectedLang === "c") quizData = C.c[selectedLevel];
    }
    setQuestions(quizData || []);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentIndex].answer) {
        setScore((prev) => prev + 1);
      }
      setSelectedOption("");
      setCurrentIndex((prev) => prev + 1);
    } else {
      toast.error("Please select an option!");
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      toast.error("Please select an option before submitting!");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to submit your quiz?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const finalScore =
          score + (selectedOption === questions[currentIndex].answer ? 1 : 0);

        localStorage.setItem("quizResult", JSON.stringify({
          score: finalScore,
          total: questions.length,
          language
        }));

        localStorage.removeItem("selectedLanguage");
        localStorage.removeItem("selectedLevel");

        window.location.href = "/result";
      }
    });
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 text-purple-900">
        <h2 className="text-3xl font-bold mb-4">No Quiz Selected</h2>
        <p>Please go back and select a language & difficulty first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 px-4 sm:px-10 bg-purple-50">
      <Toaster position="top-right" reverseOrder={false} />
      <QuizCard
        questionData={questions[currentIndex]}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
        language={language}
      />
    </div>
  );
}

export default QuizPage;
