import { Link } from "react-router";
import Footer from "../Components/Footer";
import htmlIcon from "../assets/languages/html.png";
import cssIcon from "../assets/languages/css.png";
import jsIcon from "../assets/languages/js.png";
import reactIcon from "../assets/languages/react.png";
import nodeIcon from "../assets/languages/nodejs.png";
import cIcon from "../assets/languages/c-lang.png";
import cppIcon from "../assets/languages/cpp.png";
import pythonIcon from "../assets/languages/python.png";
import DSAIcon from "../assets/languages/data-structure.png";
import javaIcon from "../assets/languages/java.png";
import phpIcon from "../assets/languages/php.png";
import tailwindIcon from "../assets/languages/tailwind.png";

const languages = [
  { name: "C", icon: cIcon },
  { name: "C++", icon: cppIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "NodeJS", icon: nodeIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Data Structure", icon: DSAIcon },
  { name: "Java", icon: javaIcon },
  { name: "PHP", icon: phpIcon },
  { name: "Tailwind", icon: tailwindIcon },
];

function Dashboard() {
  return (
    <div>
      <div className="min-h-screen w-screen flex flex-col items-center justify-start pt-10 pb-10 px-4 sm:px-10 bg-purple-50">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-transparent bg-clip-text leading-snug break-words">
          Choose a Language & Level Up Your Skills
        </h2>

        <p className="mb-10 text-center max-w-2xl text-purple-900 text-lg sm:text-xl">
          Select any language to start your coding quiz adventure. Learn, challenge yourself, and explore programming in a fun, interactive way!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {languages.map((lang) => (
            <Link
              key={lang.name}
              to={`/quiz/${lang.name.toLowerCase()}`}
              className="
                flex flex-col items-center justify-center h-40 rounded-2xl p-4 bg-white border border-gray-200
                shadow-md text-center transition-all duration-500
                hover:-translate-y-2 hover:scale-105 hover:border-[#BE5985] hover:bg-[#F8E7F6] hover:shadow-lg
              "
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <img src={lang.icon} className="w-10 h-10" />
              </div>

              <span className="text-xl font-semibold text-purple-900 transition-colors duration-500 hover:text-[#BE5985]">
                {lang.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
