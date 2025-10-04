import CodeIcon from "/src/assets/quiz-logo.png"; 

const featureData = [
  {
    icon: CodeIcon,
    title: "Programming Challenges",
    desc: "Solve quizzes in multiple programming languages.",
    iconBg: "bg-[#BE5985]",
  },
  {
    icon: CodeIcon,
    title: "Timed Quizzes",
    desc: "Test your speed and accuracy with countdown challenges.",
    iconBg: "bg-[#DD88CF]",
  },
  {
    icon: CodeIcon,
    title: "Difficulty Levels",
    desc: "Easy, Medium, Hard challenges for all skill levels.",
    iconBg: "bg-[#BE5985]",
  },
];

function Features() {
  return (
    <div className="bg-[#F5F5F5] text-gray-900 py-24 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Features of QuizCraft
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <div
              className={`p-5 rounded-full mb-6 ${feature.iconBg} flex items-center justify-center`}
            >
              <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
            </div>
            <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
