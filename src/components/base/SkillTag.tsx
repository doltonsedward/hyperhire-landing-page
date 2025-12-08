import type React from 'react';
import Text from './Text';

interface SkillTagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const SkillTag = ({ children, className = '' }: SkillTagProps) => {
  return (
    <Text
      className={`text-sm md:text-base px-3 py-1 rounded-md font-black border border-solid border-blue-gray-40 text-blue-gray-60 leading-5 ${className}`}>
      {children}
    </Text>
  );
};
