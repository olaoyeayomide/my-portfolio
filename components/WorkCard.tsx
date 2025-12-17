import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Code } from 'lucide-react';

interface WorkCardProps {
  project: Project;
}

const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col border border-github-border rounded-lg bg-github-card overflow-hidden transition-all duration-300 group hover:shadow-xl hover:border-github-accent/50 animate-slide-up">
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative border-b border-github-border">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        ) : (
          <div className="w-full h-full bg-github-bg flex items-center justify-center">
            <Code size={48} className="text-github-muted opacity-20" />
          </div>
        )}
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
           {project.demoUrl && (
             <a 
               href={project.demoUrl} 
               target="_blank" 
               rel="noreferrer"
               className="bg-white text-black hover:scale-110 p-2.5 rounded-full transition-all duration-200 shadow-lg"
               title="Live Demo"
             >
               <ExternalLink size={20} />
             </a>
           )}
           {project.url && (
             <a 
               href={project.url} 
               target="_blank" 
               rel="noreferrer"
               className="bg-black text-white border border-gray-700 hover:scale-110 p-2.5 rounded-full transition-all duration-200 shadow-lg"
               title="View Code"
             >
               <Github size={20} />
             </a>
           )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-github-text group-hover:text-github-accent transition-colors">
            {project.name}
            </h3>
        </div>
        
        <p className="text-github-muted text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 4).map((topic, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-github-bg border border-github-border text-github-muted group-hover:border-github-accent/30 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-github-border/50 text-xs">
             {project.demoUrl && (
                <a href={project.demoUrl} className="flex items-center gap-1 text-github-accent hover:underline font-bold">
                  <ExternalLink size={12} /> Live Demo
                </a>
             )}
             {project.url && (
                <a href={project.url} className="flex items-center gap-1 text-github-muted hover:text-github-text hover:underline">
                  <Github size={12} /> Source
                </a>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;