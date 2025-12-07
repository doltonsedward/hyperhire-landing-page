import type React from 'react';

interface IconBoxProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const IconBox = ({ icon, children, className = '' }: IconBoxProps) => {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg bg-muted ${className}`}>
      <div className="flex-shrink-0">{icon}</div>
      <div>{children}</div>
    </div>
  );
};
