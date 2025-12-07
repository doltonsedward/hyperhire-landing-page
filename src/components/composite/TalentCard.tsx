import type React from 'react';
import { Avatar } from '@components/base/Avatar';
import { Flag } from '@components/base/Flag';
import { SkillTag } from '@components/base/SkillTag';

interface TalentCardProps {
  name: string;
  avatar: string;
  country: string;
  experience: string;
  skills: string[];
  className?: string;
}

export const TalentCard = ({ name, avatar, country, experience, skills, className = '' }: TalentCardProps) => {
  return (
    <div className={`bg-white rounded-3xl p-4 sm:p-8 shadow-2xl relative w-full max-w-xs mx-auto ${className}`}>
      {/* Avatar with Flag */}
      <div className="flex justify-center mb-4 sm:mb-6 relative">
        <div className="relative">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gray-200 overflow-hidden">
            <Avatar src={avatar} alt={name} size="lg" className="w-full h-full" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-4 sm:w-8 sm:h-6">
            <Flag country={country} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 text-center mb-1 sm:mb-2">{name}</h3>

      {/* Experience */}
      <p className="text-blue-500 text-center mb-4 sm:mb-8 font-medium text-base sm:text-lg">{experience}</p>

      {/* Skills */}
      <div className="space-y-2 sm:space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center">
            <SkillTag variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
              {skill}
            </SkillTag>
          </div>
        ))}
      </div>
    </div>
  );
};
