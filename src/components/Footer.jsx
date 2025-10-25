import React from 'react';

function Footer() {
  return (
    /* Using a semi-transparent dark background for consistency with the navbar/cards */
    <footer className="py-10 bg-black/80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">MD<span className="text-blue-400">.</span></a>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <p>© 2023 Mouadh Dhif. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
