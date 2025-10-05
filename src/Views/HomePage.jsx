import { Link } from "react-router";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div className="w-screen min-h-screen flex flex-col text-white">

      {/* Hero Section */}
      <div className="h-screen relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-red-400">
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full bottom-[-100px] right-[-100px]"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-center">
          QuizCraft
        </h1>
        <p className="text-lg md:text-xl text-white/90 text-center max-w-xl mb-10">
          Test your knowledge, challenge your brain, and have fun with interactive quizzes!
        </p>

        <Link to="/quiz">
          <button className="px-14 py-4 text-lg font-bold bg-white text-purple-600 rounded-full shadow-lg hover:bg-gray-100 transition-all">
            Start Quiz
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <Features />

      <Footer/>
    </div>
  );
}

export default HomePage;
