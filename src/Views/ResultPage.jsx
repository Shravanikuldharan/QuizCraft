import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaHome, FaTrophy, FaSmile, FaFrown } from "react-icons/fa";
import trophyImg from "../assets/trophy.png";
import happyImg from "../assets/happy.png";
import sadImg from "../assets/sad.png";
import Button from "../Components/Button";

function ResultPage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("quizResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-purple-700">
        <h2 className="text-3xl font-bold mb-4">No Result Found</h2>
        <Link to="/dashboard">
          <Button
            text={
              <div className="flex items-center gap-2">
                <FaHome /> Home
              </div>
            }
            bgColor="bg-purple-700"
            textColor="text-white"
            hoverColor="hover:bg-purple-800"
          />
        </Link>
      </div>
    );
  }

  const percentage = Math.round((result.score / result.total) * 100);

  let message = "";
  let messageIcon = null;
  let imgSrc = null;
  let imgClass = "w-28 h-28 mb-4";

  if (percentage >= 75) {
    message = "Excellent!";
    messageIcon = <FaTrophy className="text-yellow-500 inline ml-1 mt-[-5px]" />;
    imgSrc = trophyImg;
    imgClass += " animate-bounce";
  } else if (percentage >= 50) {
    message = "Good Job!";
    messageIcon = <FaSmile className="text-green-500 inline ml-2 mt-[-5px]" />;
    imgSrc = happyImg;
  } else {
    message = "Better Work Needed!";
    messageIcon = <FaFrown className="text-red-500 inline ml-2 mt-[-5px]" />;
    imgSrc = sadImg;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-12 flex  border-2 border-gray-300 hover:border-pink-300 flex-col items-center gap-6">
        {imgSrc && <img src={imgSrc} className={imgClass} />}

        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          {result.language.toUpperCase()} Quiz Result
        </h2>

        <div className="flex items-center gap-3">
          <p className="text-xl font-semibold">Score:</p>
          <p className="text-2xl font-bold text-purple-700">{result.score}</p>
          <span className="text-xl font-medium text-gray-500">/ {result.total}</span>
        </div>

        <p className="text-lg font-medium text-gray-700">
          {message} {messageIcon}
        </p>

        <Link to="/dashboard">
          <Button
            text={
              <div className="flex items-center gap-2">
                <FaHome /> Home
              </div>
            }
            bgColor="bg-purple-700"
            textColor="text-white"
            hoverColor="hover:bg-purple-800"
          />
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
