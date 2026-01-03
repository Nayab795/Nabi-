
import React from 'react';

const About: React.FC = () => {
  const badges = ["Strategic Thinker", "Quick Learner", "UI Architect", "Agile Mindset"];

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-8">
                Building Digital<br/>
                <span className="text-brand-accent1">Experiences</span>
              </h3>
              <p className="text-brand-muted text-xl leading-loose font-medium opacity-90">
                I am a detail-oriented Developer dedicated to crafting interfaces that feel as good as they look. 
                With a BS in IT and a specialization in <span className="text-brand-main font-bold">React Native</span>, 
                I focus on performance, accessibility, and modern aesthetics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {badges.map(badge => (
                <div key={badge} className="px-6 py-3 rounded-2xl bg-slate-50 border border-brand-accent1/10 text-brand-accent1 font-black text-sm tracking-wide">
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="aspect-square p-10 rounded-[3rem] bg-gradient-to-br from-brand-accent1/5 to-transparent border border-brand-accent1/10 flex flex-col justify-end group hover:bg-brand-accent1 transition-all duration-500">
              <i className="fas fa-lightbulb text-4xl text-brand-accent1 mb-6 group-hover:text-white transition-colors"></i>
              <h4 className="text-xl font-black mb-2 group-hover:text-white transition-colors">Future Vision</h4>
              <p className="text-brand-muted font-bold group-hover:text-white/80 transition-colors">Seeking roles in FinTech or AI startups.</p>
            </div>

            <div className="aspect-square p-10 rounded-[3rem] bg-gradient-to-br from-brand-accent3/5 to-transparent border border-brand-accent3/10 flex flex-col justify-end group hover:bg-brand-accent3 transition-all duration-500">
              <i className="fas fa-camera-retro text-4xl text-brand-accent3 mb-6 group-hover:text-white transition-colors"></i>
              <h4 className="text-xl font-black mb-2 group-hover:text-white transition-colors">Personal Drive</h4>
              <p className="text-brand-muted font-bold group-hover:text-white/80 transition-colors">Powered by coffee, chess, and nature.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
