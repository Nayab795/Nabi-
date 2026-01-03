
import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const roles = [
    "Web & App Developer",
    "React Native Specialist",
    "AI Solutions Enthusiast"
  ];
  const typedText = useTypewriter(roles);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      {/* Refined Gradient Backgrounds */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-brand-accent1/5 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-brand-accent3/5 rounded-full blur-[120px] animate-float-alt"></div>

      <div className="container mx-auto text-center z-10">
        <div className="inline-block px-5 py-2 rounded-full bg-white border border-brand-accent1/20 mb-10 shadow-sm animate-pulse">
          <span className="text-brand-accent1 font-bold text-xs tracking-[0.2em] uppercase">Open to New Opportunities</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
          I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent1 via-brand-accent4 to-brand-accent3">Nayab</span>
        </h1>

        <div className="h-12 mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-brand-accent2 tracking-[0.15em] uppercase">
            {typedText}
            <span className="inline-block w-1 h-8 bg-brand-accent2 ml-1 animate-pulse align-middle"></span>
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-muted leading-relaxed font-medium mb-16 opacity-90">
          Fresh BS IT graduate bridging the gap between <span className="text-brand-main font-bold">Artificial Intelligence</span> 
          and <span className="text-brand-main font-bold">User Experience</span>. Specialized in building cross-platform mobile apps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a href="#projects" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-br from-brand-accent1 to-brand-accent2 text-white font-black text-lg shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all">
            View My Work
          </a>
          <a href="#" className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-brand-accent1/30 text-brand-accent1 font-black text-lg hover:bg-brand-accent1/5 transition-all">
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-brand-muted text-sm font-bold border-t border-brand-accent1/10 pt-10">
          <span className="flex items-center gap-3"><i className="fas fa-location-dot text-brand-accent1 opacity-70"></i> Wah / Taxila, PK</span>
          <span className="flex items-center gap-3"><i className="fas fa-graduation-cap text-brand-accent1 opacity-70"></i> BS IT Graduate '25</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
