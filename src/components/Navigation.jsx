import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-white">
            MD<span className="text-blue-500">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-white font-medium hover:text-blue-400 transition nav-link">Home</a>
            <a href="#about" className="text-white font-medium hover:text-blue-400 transition nav-link">About</a>
            <a href="#skills" className="text-white font-medium hover:text-blue-400 transition nav-link">Skills</a>
            <a href="#projects" className="text-white font-medium hover:text-blue-400 transition nav-link">Projects</a>
            <a href="#experience" className="text-white font-medium hover:text-blue-400 transition nav-link">Experience</a>
            <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition nav-link-button">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block text-white font-medium hover:text-blue-400 transition nav-link">Home</a>
          <a href="#about" className="block text-white font-medium hover:text-blue-400 transition nav-link">About</a>
          <a href="#skills" className="block text-white font-medium hover:text-blue-400 transition nav-link">Skills</a>
          <a href="#projects" className="block text-white font-medium hover:text-blue-400 transition nav-link">Projects</a>
          <a href="#experience" className="block text-white font-medium hover:text-blue-400 transition nav-link">Experience</a>
        </div>
        <div className="px-4 py-3">
          <a href="#contact" className="block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-center nav-link-button">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;