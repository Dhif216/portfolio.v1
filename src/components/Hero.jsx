import React from 'react';

function Hero() {
  return (
    <section id="home" className="flex items-center min-h-screen py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">

          {/* Text Content */}
          <div className="md:w-1/2 lg:w-3/5 fade-in">
            <p className="text-lg md:text-xl tracking-wide mb-3 text-blue-400 uppercase">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 tracking-tight">
              Mouadh <span className="text-gradient">Dhif</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              UI/UX Designer
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
              Crafting exceptional user experiences through creative design solutions. 
              Based in Finland, working worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#projects" className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition text-lg btn-primary">
                View Portfolio
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition text-lg btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 lg:w-2/5 mt-12 md:mt-0 flex justify-center fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white/10 shadow-2xl mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-7xl font-bold">MD</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black/50 backdrop-blur-md rounded-lg shadow-lg p-4 text-left">
                <p className="font-bold text-white text-md">3+ Years Experience</p>
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
