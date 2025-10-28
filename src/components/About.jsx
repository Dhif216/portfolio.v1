import React from 'react';

const About = () => (
    <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in">
                <p className="text-blue-400 text-lg font-medium uppercase tracking-wide mb-2">About Me</p>
                <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
                  Crafting Digital <span className="text-gradient">Experiences</span>
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  I'm a passionate UI/UX designer with a keen eye for creating engaging and intuitive digital products.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-start">
                {/* Left side: Image and Badge */}
                <div className="w-full md:w-2/5 lg:w-1/3 fade-in mb-8 md:mb-0">
                     <div className="relative mx-auto max-w-xs md:max-w-none">
                         <div className="w-full h-96 bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                             <div className="w-full h-full bg-gradient-to-br from-blue-800/80 to-indigo-900/80 flex items-center justify-center">
                                 <span className="text-2xl font-bold text-blue-300">My Photo</span>
                             </div>
                         </div>
                         <div className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur-md p-4 rounded-lg shadow-md">
                             <p className="font-bold text-gray-200">UI/UX Designer</p>
                             <p className="text-gray-400 text-sm">Based in Finland</p>
                         </div>
                     </div>
                </div>
                
                {/* Right side: Description and Details */}
                <div className="w-full md:w-3/5 lg:w-2/3 md:pl-10 lg:pl-16 fade-in">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Design Philosophy</h3>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                      My passion is creating digital experiences that are both beautiful and functional. I believe every project is an opportunity to deliver stunning visuals and an exceptional user journey.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300 mb-8">
                      Based in Finland, I work with clients worldwide on projects from mobile apps to large-scale web platforms. My freelance experience has taught me to adapt to diverse industries and needs.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                            <p className="font-semibold text-gray-300 mb-1">Name:</p>
                            <p className="text-gray-400">Mouadh Dhif</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-300 mb-1">Email:</p>
                            <p className="text-gray-400">dhif_mouadh@hotmail.fr</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-300 mb-1">From:</p>
                            <p className="text-gray-400">Finland</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-300 mb-1">Freelance:</p>
                            <p className="text-gradient font-medium">Available</p>
                        </div>
                    </div>
                    
                    <div>
                        <a href="CV 11,03.docx" className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition btn-primary" download>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
