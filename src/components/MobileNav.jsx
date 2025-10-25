import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="hero-shape"></div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left side: Text Content - Now wrapped in the transparent card */}
          <div className="md:w-1/2 fade-in glass-card p-8">
            <p className="text-lg font-medium mb-4 text-gray-200">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Mouadh <span className="text-gradient">Dhif</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">UI/UX Designer</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Crafting exceptional user experiences through creative design solutions. 
              Based in Finland, working worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="btn-primary">View Portfolio</a>
              <a href="#contact" className="px-6 py-3 border-2 border-gray-300 text-gray-300 rounded-full font-semibold transition hover:border-gray-400">
                Contact Me
              </a>
            </div>
            <div className="flex space-x-6 mt-12">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-dribbble text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-behance text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Right side: Avatar and Badge - Also wrapped for consistency and separation from the background */}
          <div className="md:w-1/2 mt-12 md:mt-0 fade-in glass-card p-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white/10 shadow-xl mx-auto">
                <div className="w-full h-full bg-gradient flex items-center justify-center text-white">
                  <span className="text-6xl font-bold">MD</span>
                </div>
              </div>
              
              {/* Floating Badge: Also uses transparent background */}
              <div className="absolute -bottom-4 -right-4 bg-black/60 backdrop-blur-sm rounded-lg shadow-lg p-4">
                <p className="font-bold text-white">3+ Years Experience</p>
                <p className="text-sm text-gray-300">UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
