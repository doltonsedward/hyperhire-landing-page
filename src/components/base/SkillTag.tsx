import type React from 'react';

interface SkillTagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const SkillTag = ({ children, variant = 'outline', className = '' }: SkillTagProps) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-700 border border-blue-200',
    secondary: 'bg-gray-100 text-gray-700 border border-gray-200',
    outline: 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-colors',
  };

  return (
    <button className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
