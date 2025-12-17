import React from 'react';
import { Project } from '../types';
import { Star, GitFork } from './Icons';

interface RepoCardProps {
  project: Project;
  pinned?: boolean;
}

const RepoCard: React.FC<RepoCardProps> = ({ project, pinned = false }) => {
  return (
    <div className="flex flex-col justify-between p-4 border border-github-border rounded-md bg-github-bg hover:border-github-muted transition-colors h-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="fill-github-muted">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <a href={project.url} className="text-github-accent font-semibold hover:underline text-base truncate">
            {project.name}
          </a>
          <span className="text-xs text-github-muted border border-github-border rounded-full px-2 py-0.5 ml-auto">
            {project.isPublic ? 'Public' : 'Private'}
          </span>
        </div>
        <p className="text-sm text-github-muted line-clamp-3 mb-4">
          {project.description}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs text-github-muted mt-auto">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }}></span>
          <span>{project.language}</span>
        </div>
        
        {project.stars > 0 && (
          <div className="flex items-center gap-1 hover:text-github-accent cursor-pointer">
            <Star size={14} />
            <span>{project.stars}</span>
          </div>
        )}

        {project.forks > 0 && (
          <div className="flex items-center gap-1 hover:text-github-accent cursor-pointer">
            <GitFork size={14} />
            <span>{project.forks}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;