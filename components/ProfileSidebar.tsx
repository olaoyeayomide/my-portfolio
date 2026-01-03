import React from "react";
import { Profile } from "../types";
import { MapPin, LinkIcon, Mail, Users, Twitter, Building } from "./Icons";
import { FileText, Phone } from "lucide-react";

interface ProfileSidebarProps {
  profile: Profile;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ profile }) => {
  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      <div className="relative group mx-auto md:mx-0">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="w-64 h-64 md:w-full md:max-w-[296px] rounded-full border border-github-border shadow-lg z-10 relative object-cover"
        />
        <div className="absolute inset-0 rounded-full border border-github-border opacity-10 group-hover:opacity-20 transition-opacity"></div>

        <div className="absolute bottom-4 right-4 md:right-0 bg-github-card border border-github-border rounded-full p-2 shadow-md hidden md:block">
          <div className="text-xl">🎯</div>
        </div>
      </div>

      <div className="py-2 text-center md:text-left">
        <h1 className="text-2xl font-bold text-github-text leading-tight">
          {profile.name}
        </h1>
        <h2 className="text-xl text-github-muted font-light leading-tight">
          {profile.username}
        </h2>
      </div>

      <div className="text-github-text text-base text-center md:text-left">
        {profile.bio}
      </div>

      <button
        className="w-full inline-flex items-center justify-center bg-github-btn border border-github-border text-github-text py-1.5 px-4 rounded-md font-medium text-sm hover:bg-github-btnHover transition-colors"
        onClick={() => {
          window.open(
            "https://www.canva.com/design/DAG2XrS9e1I/qinD4s2J3n_kNaJJN55FSw/edit?utm_content=DAG2XrS9e1I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            "_blank"
          );
        }}
      >
        <FileText className="w-4 h-4 mr-2" />
        Download Resume
      </button>
      <a
        href="tel:+2348114721756"
        className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <Phone className="w-4 h-4 mr-2" />
        Contact Me
      </a>

      <div className="flex flex-col gap-2 mt-2 px-2 md:px-0">
        {profile.company && (
          <div className="flex items-center gap-2 text-sm text-github-text">
            <Building size={16} className="text-github-muted" />
            <span>{profile.company}</span>
          </div>
        )}
        {profile.location && (
          <div className="flex items-center gap-2 text-sm text-github-text">
            <MapPin size={16} className="text-github-muted" />
            <span>{profile.location}</span>
          </div>
        )}
        {profile.email && (
          <div className="flex items-center gap-2 text-sm text-github-text">
            <Mail size={16} className="text-github-muted" />
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-github-accent hover:underline"
            >
              {profile.email}
            </a>
          </div>
        )}
        {profile.website && (
          <div className="flex items-center gap-2 text-sm text-github-text">
            <LinkIcon size={16} className="text-github-muted" />
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-github-accent hover:underline truncate"
            >
              {profile.website}
            </a>
          </div>
        )}
        {profile.twitter && (
          <div className="flex items-center gap-2 text-sm text-github-text">
            <Twitter size={16} className="text-github-muted" />
            <a
              href={`https://twitter.com/${profile.twitter}`}
              className="hover:text-github-accent hover:underline"
            >
              {profile.twitter}
            </a>
          </div>
        )}
      </div>

      <div className="border-t border-github-border my-2"></div>

      <div>
        <h3 className="font-semibold mb-2 text-github-text">Achievements</h3>
        <div className="flex gap-2">
          <img
            src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
            className="w-8 h-8 rounded-full border border-github-border"
            title="Pull Shark"
            alt="Achievement"
          />
          <img
            src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png"
            className="w-8 h-8 rounded-full border border-github-border"
            title="YOLO"
            alt="Achievement"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
