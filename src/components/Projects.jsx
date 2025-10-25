import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Local Horse Tour — Redesign',
      description: 'Redesign concept for a local horse tour website focused on UX improvements and clear information architecture.',
      image: 'https://images.unsplash.com/photo-1694885138169-bb8acc2aa8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML', 'CSS', 'Figma'],
      link: 'https://dhif216.github.io/Local-Horse-Tour-Website-Redesign/'
    },
    {
      title: 'Gamer Landing',
      description: 'A modern landing page for gaming communities and events with engaging visuals and responsive layout.',
      image: 'https://dhif216.github.io/gamer/call.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://dhif216.github.io/gamer/'
    },
    {
      title: 'Hippi Project',
      description: 'Creative project showcasing branding and UI for a lifestyle site.',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['HTML', 'CSS', 'Design'],
      link: 'https://dhif216.github.io/hippi/'
    },
    {
      title: 'Website Template',
      description: 'A multi-purpose website template that can be adapted for portfolios and small businesses.',
      image: 'https://dhif216.github.io/website/logo.jpg',
      technologies: ['HTML', 'CSS', 'Responsive'],
      link: 'https://dhif216.github.io/website/'
    },
    {
      title: 'Portfolio (Dark Mode)',
      description: 'Portfolio with a dark mode variant and refined typography/spacing.',
      image: 'https://dhif216.github.io/Portfolio-darkmode/profile.jpg',
      technologies: ['React', 'CSS', 'Accessibility'],
      link: 'https://dhif216.github.io/Portfolio-darkmode/'
    },
    {
      title: 'Movies App',
      description: 'Movie discovery UI with clean cards and filtering features.',
      image: 'https://images.unsplash.com/photo-1517604931442-7aa1f6f2f77f?auto=format&fit=crop&w=1350&q=80',
      technologies: ['HTML', 'CSS', 'API'],
      link: 'https://dhif216.github.io/movies/'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution in UI/UX design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.filter(p => p.link).map((project, index) => (
            <div key={index} className="project-card fade-in overflow-hidden">
              <div className="image-container">
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} in a new tab`} className="block w-full h-full">
                  <div className="relative w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      loading="lazy"
                    />

                    <div className="project-overlay absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <p className="text-sm text-white font-semibold">{project.title}</p>
                        <p className="text-xs text-gray-200">Click to open demo</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="content-container p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" rel="noopener noreferrer"
                  className="w-full text-center inline-block btn-primary text-sm font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
