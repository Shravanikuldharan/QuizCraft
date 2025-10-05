import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import peerlistIcon from "../assets/peerlist.png";

function Footer() {
  const socialLinks = [
    { icon: githubIcon, url: "https://github.com/" },
    { icon: linkedinIcon, url: "https://linkedin.com/" },
    { icon: peerlistIcon, url: "https://peerlist.io/" },
  ];

  return (
    <footer className="bg-[#BE5985] text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-10">

        {/* Project Name + Description */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="/"
            className="text-2xl font-bold mb-2 hover:text-[#F8E7F6] transition-colors duration-300"
          >
            QuizCraft
          </a>
          <p className="text-gray-100 max-w-xs">
            Elevate your coding skills with interactive quizzes, timed challenges, and levels suited for every programmer.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center text-center space-y-2">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <a
            href="/"
            className="hover:text-[#F8E7F6] transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
          >
            Home
          </a>
          <a
            href="/features"
            className="hover:text-[#F8E7F6] transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
          >
            Features
          </a>
          <a
            href="/contact"
            className="hover:text-[#F8E7F6] transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex flex-col items-center space-y-3">
          <h3 className="text-xl font-semibold mb-2 mt-[-50px]">Follow Us</h3>
          <div className="flex space-x-5 mt-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#F8E7F6] hover:scale-110"
              >
                <img
                  src={social.icon}
                  className="w-6 h-6 object-contain rounded-full"
                  alt="social icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-200 mt-10 border-t border-[#DD88CF] pt-6">
        &copy;2025 QuizCraft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
