import programmingIcon from "../assets/programming.png";
import timerIcon from "../assets/timer.png";
import levelIcon from "../assets/level.png";

const featureData = [
  {
    icon: programmingIcon,
    title: "Programming Challenges",
    desc: "Solve quizzes in multiple programming languages.",
  },
  {
    icon: timerIcon,
    title: "Timed Quizzes",
    desc: "Test your speed and accuracy with countdown challenges.",
  },
  {
    icon: levelIcon,
    title: "Difficulty Levels",
    desc: "Easy, Medium, Hard challenges for all skill levels.",
  },
];

function Features() {
  return (
    <section className="bg-[#F5F5F5] text-gray-900 py-14 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-5xl font-bold text-purple-500 mb-6">
          Why Choose QuizCraft?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover interactive ways to strengthen your coding skills and test
          your knowledge through engaging challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-center md:text-left bg-white border border-gray-200 rounded-3xl p-8 shadow-md transition-all duration-500
              hover:-translate-y-2 hover:shadow-sm hover:border-[#BE5985] hover:bg-[#F8E7F6] hover:cursor-pointer"
          >
            <img
              src={feature.icon}
              className="w-16 h-16 mb-4 md:mb-0 md:mr-6 transition-all duration-500 hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-500 hover:text-[#BE5985]">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;