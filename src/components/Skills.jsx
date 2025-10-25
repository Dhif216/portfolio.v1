import React from 'react';

function Skills() {
  const skills = [
    {
      heading: 'Skills',
      items: ['HTML & CSS', 'Responsive Design', 'JavaScript', 'React', 'UI Design', 'UX Research']
    },
    {
      heading: 'Tools',
      items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Git & GitHub', 'VS Code']
    },
    {
      heading: 'Services',
      items: ['UX Audits', 'Wireframing', 'Prototyping', 'Interaction Design', 'Accessibility Reviews']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">A concise overview of the tools, skills and services I provide. Hover or tap each card to learn more.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((col, idx) => (
            <div key={idx} className="glass-card p-6 fade-in">
              <h3 className="text-xl font-semibold text-white mb-4">{col.heading}</h3>
              <ul className="space-y-2 text-gray-300">
                {col.items.map((it, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-gradient rounded-full mr-3" aria-hidden></span>
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
