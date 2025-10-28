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
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A concise overview of the tools, skills and services I provide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((col, idx) => (
            <div key={idx} className="bg-gray-900/50 p-6 rounded-lg shadow-lg fade-in transition-transform transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-white mb-4">{col.heading}</h3>
              <ul className="space-y-3 text-gray-300">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
                    <span>{item}</span>
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
