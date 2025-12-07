import type React from 'react';

interface CheckboxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Checkbox = ({ children, variant = 'primary', size = 'md', className = '' }: CheckboxProps) => {
  const variants = {
    primary: 'bg-white/20 border-white/30',
    secondary: 'bg-gray-100 border-gray-300',
  };

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`
        ${sizes[size]} 
        ${variants[variant]}
        border rounded-md
        flex items-center justify-center
        flex-shrink-0
      `}>
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className={`font-medium text-white ${textSizes[size]}`}>{children}</span>
    </div>
  );
};
