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
    <footer className="bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-red-400/40 text-purple-900 py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="/"
            className="text-2xl font-bold mb-2 hover:text-pink-600 transition-colors duration-300"
          >
            QuizCraft
          </a>
          <p className="text-purple/10 max-w-xs">
            Elevate your coding skills with interactive quizzes, timed challenges, and levels suited for every programmer.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-center text-center">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col space-y-1">
            <a href="/" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Home</a>
            <a href="/features" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Features</a>
            <a href="/dashboard" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Dashboard</a>
            <a href="/contact" className="hover:text-pink-600 hover:font-bold transition-all duration-300 transform hover:translate-x-1">Contact</a>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/90 hover:scale-110"
              >
                <img
                  src={social.icon}
                  className="w-6 h-6 object-contain"
                  alt="social icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-puprle-100 mt-10 border-t border-white/30 pt-6 text-sm">
        &copy; 2025 QuizCraft. All rights reserved.
      </div>
    </footer>

  );
}

export default Footer;
