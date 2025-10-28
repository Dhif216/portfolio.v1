import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="py-10 bg-gray-900/50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <a href="#home" className="text-2xl font-bold text-white">MD<span className="text-blue-400">.</span></a>
          </div>

          <div className="text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mouadh Dhif. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-dribbble text-xl"></i>
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-behance text-xl"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
