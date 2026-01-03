
import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  onOpenModal: (url: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const projects: Project[] = [
    {
      id: 'stylist',
      title: 'AI Virtual Stylist',
      tag: 'Mobile • AI-Driven',
      icon: 'fas fa-mobile-alt',
      description: 'A revolutionary fashion assistant that enables users to virtually try on outfits and manage their wardrobe efficiently.',
      points: ['AI-powered virtual try-on', 'Cloud-based wardrobe synchronization', 'Dynamic recommendation engine'],
      images: [
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      id: 'resume',
      title: 'Smart Resume Analyzer',
      tag: 'Web • NLP Integration',
      icon: 'fas fa-brain',
      description: 'An intelligent platform that optimizes professional resumes for Applicant Tracking Systems (ATS) using AI.',
      points: ['Real-time ATS score calculation', 'Intelligent keyword extraction', 'Personalized improvement tips'],
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 'story',
      title: 'AI Story Generator',
      tag: 'Web • Creative AI',
      icon: 'fas fa-book-open',
      description: 'A creative writing partner that utilizes Large Language Models to transform simple prompts into complete narratives.',
      points: ['Context-aware story generation', 'Multi-genre support', 'Export-ready clean layouts'],
      images: [
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1474366521946-c3d4b507ad68?auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <h3 className="text-4xl md:text-5xl font-black">Selected Works</h3>
          <p className="text-brand-muted font-bold text-lg max-w-sm">Designing the future of human-AI interaction.</p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Image Column */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                  {project.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onOpenModal(img)}
                      className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] snap-center ${project.id === 'stylist' ? 'w-56 aspect-[9/16]' : 'w-full max-w-lg aspect-video'}`}
                    >
                      <img src={img} alt={`${project.title} screenshot`} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute inset-0 bg-brand-main/0 group-hover:bg-brand-main/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-main shadow-lg">
                          <i className="fas fa-search-plus"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent1">{project.tag}</span>
                  <h4 className="text-3xl md:text-4xl font-black tracking-tight">{project.title}</h4>
                </div>
                
                <p className="text-brand-muted text-lg leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <ul className="space-y-4">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-muted font-bold">
                      <div className="w-2 h-2 rounded-full bg-brand-accent1"></div>
                      {point}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-3 text-brand-main font-black group">
                  <span className="border-b-2 border-brand-accent1 pb-1 group-hover:border-brand-accent3 transition-all">Case Study Coming Soon</span>
                  <i className="fas fa-arrow-right text-brand-accent1 group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
