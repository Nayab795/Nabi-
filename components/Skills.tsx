
import React from 'react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillGroups: SkillCategory[] = [
    {
      category: "Development & Web",
      items: [
        { icon: 'fas fa-mobile-alt', title: 'App Dev', description: 'React Native (Expo)' },
        { icon: 'fas fa-globe', title: 'Web Dev', description: 'React JS, HTML5, CSS3, JS' },
        { icon: 'fas fa-code', title: 'Languages', description: 'JavaScript, Python, PHP, SQL' },
      ]
    },
    {
      category: "AI & Data Science",
      items: [
        { icon: 'fas fa-brain', title: 'AI / ML', description: 'TensorFlow, NLP Basics' },
        { icon: 'fas fa-chart-line', title: 'Data Analysis', description: 'Pandas, NumPy, Matplotlib' },
        { icon: 'fas fa-database', title: 'Persistence', description: 'Firebase, MySQL, XAMPP' },
      ]
    },
    {
      category: "Tools & Workflow",
      items: [
        { icon: 'fas fa-chart-pie', title: 'Power BI', description: 'Data Visualization & Insights' },
        { icon: 'fas fa-vial', title: 'REST APIs', description: 'FastAPI, Postman' },
        { icon: 'fas fa-git-alt', title: 'Versioning', description: 'Git, GitHub, Agile Basics' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-slate-50/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h3 className="text-4xl md:text-5xl font-black mb-6">Technical Arsenal</h3>
          <p className="text-brand-muted text-xl font-medium leading-relaxed">
            A comprehensive stack focused on building scalable, intelligent applications 
            with modern frameworks and data-driven insights.
          </p>
        </div>

        <div className="space-y-16">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-brand-accent1 flex items-center gap-4">
                {group.category}
                <span className="flex-1 h-[1px] bg-brand-accent1/10"></span>
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((skill, idx) => (
                  <div key={idx} className="group p-8 rounded-3xl bg-white border border-brand-accent1/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-accent1/5 flex items-center justify-center group-hover:bg-brand-accent1/10 transition-colors">
                        <i className={`${skill.icon} text-2xl text-brand-accent1`}></i>
                      </div>
                      <div>
                        <h5 className="text-lg font-black mb-2">{skill.title}</h5>
                        <p className="text-brand-muted text-sm font-medium leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
