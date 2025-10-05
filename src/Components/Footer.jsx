import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import peerlistIcon from "../assets/peerlist.png";

function Footer() {
  const socialLinks = [
    { icon: githubIcon, url: "https://github.com/Shravanikuldharan/QuizCraft" },
    { icon: linkedinIcon, url: "https://www.linkedin.com/in/shravani-kuldharan/" },
    { icon: peerlistIcon, url: "https://peerlist.io/shravani_k" },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-red-400/40 text-purple-900 py-8 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-10 md:gap-20">

        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold mb-2 hover:text-pink-600 transition-colors duration-300"
          >
            QuizCraft
          </a>
          <p className="text-purple-600 max-w-xs">
            Elevate your coding skills with interactive quizzes, timed challenges, and levels suited for every programmer.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col space-y-1">
            <a href="/" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Home</a>
            <a href="/#features" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Features</a>
            <a href="/dashboard" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Dashboard</a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center text-center mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/90 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt="social icon"
                  className="w-6 h-6 md:w-5 md:h-5 object-contain rounded-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-purple-600 mt-10 border-t border-white/30 pt-6 text-sm">
        &copy; 2025 QuizCraft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
