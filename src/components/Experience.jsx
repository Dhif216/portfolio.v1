import React from 'react';

function Experience() {
  const experiences = [
    {
      period: "2021 - Present",
      title: "Senior UI/UX Designer - Freelance",
      description: "Working with global clients to deliver exceptional user experiences across various digital products.",
      achievements: [
        "Led the UX research and design for over 8 successful projects",
        "Collaborated with development teams to ensure design integrity",
        "Implemented user-centered design methodologies",
        "Delivered projects for clients in fintech, e-commerce, and education sectors"
      ]
    },
    {
      period: "2018 - 2021",
      title: "UI/UX Designer - Tech Solutions Inc.",
      description: "Worked as part of a cross-functional team to create innovative digital solutions.",
      achievements: [
        "Designed responsive web interfaces and mobile applications",
        "Conducted user testing and implemented feedback",
        "Created design systems to maintain consistency",
        "Collaborated with product managers to align design with business goals"
      ]
    },
    {
      period: "2016 - 2018",
      title: "Junior UI Designer - Creative Agency",
      description: "Started my professional journey in the digital design field.",
      achievements: [
        "Assisted senior designers in creating visual assets",
        "Learned and applied UI/UX design principles",
        "Contributed to multiple web design projects",
        "Developed skills in various design tools and software"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey as a UI/UX designer, including freelance projects and collaborations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 fade-in">
              <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-blue-400 mb-2">{exp.period}</p>
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="text-gray-400 list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
