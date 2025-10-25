import React from 'react';

const About = () => (
    <section id="about" className="py-20">
        <div className="container mx-auto px-4">
            <div className="section-header fade-in">
                <p className="text-blue-400 text-lg font-medium uppercase tracking-wide mb-4">About Me</p>
                <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
                  Crafting Digital <span className="text-gradient">Experiences</span>
                </h2>
                <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  I'm a passionate UI/UX designer with a keen eye for creating engaging digital experiences.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
                {/* Left side: Image and Badge */}
                <div className="md:w-2/5 fade-in glass-card p-4">
                     <div className="relative">
                         <div className="w-full h-96 bg-gray-900 rounded-2xl overflow-hidden">
                             {/* NOTE: You can replace this inner div content with an actual image URL when ready */}
                             <div className="w-full h-full bg-gradient-to-br from-blue-800/80 to-indigo-900/80 flex items-center justify-center">
                                 <span className="text-2xl font-bold text-blue-300">My Photo Placeholder</span>
                             </div>
                         </div>
                         {/* Badge uses glass-card style */}
                         <div className="absolute -bottom-6 -right-6 glass-card p-4 bg-black/60">
                             <p className="font-bold text-gray-300">UI/UX Designer</p>
                             <p className="text-gray-500 text-sm">Based in Finland</p>
                         </div>
                     </div>
                </div>
                
                {/* Right side: Description and Details */}
                <div className="md:w-3/5 mt-12 md:mt-0 md:pl-16 fade-in glass-card p-8">
                    <h3 className="text-3xl font-bold mb-8 tracking-tight">Design Philosophy</h3>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                      I'm passionate about creating engaging digital experiences that balance aesthetics and functionality. Every project is an opportunity to deliver both stunning visuals and exceptional user experience.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                      Based in Finland, I collaborate with clients worldwide on projects ranging from mobile applications to comprehensive web platforms. My freelance experience has honed my ability to adapt to diverse industries and requirements.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300 mb-8">
                      Great design should tell a story and evoke emotions while solving real problems. Every pixel and interaction serves a purpose, contributing to a seamless user journey.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <p className="font-semibold mb-2 text-gray-300">Name:</p>
                            <p className="text-gray-500">Mouadh Dhif</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2 text-gray-300">Email:</p>
                            <p className="text-gray-500">dhif_mouadh@hotmail.fr</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2 text-gray-300">From:</p>
                            <p className="text-gray-500">Finland</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2 text-gray-300">Freelance:</p>
                            <p className="text-gradient font-medium">Available</p>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <a href="CV 11,03.docx" className="btn-primary" download>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
