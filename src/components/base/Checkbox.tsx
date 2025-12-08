import type React from 'react';
import CheckIcon from './Icons/CheckIcon';

interface CheckboxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Checkbox = ({ children, variant = 'primary', size = 'md', className = '' }: CheckboxProps) => {
  const variants = {
    primary: 'bg-[#E8ECFF] rounded-md p-1',
    secondary: 'bg-gray-100 rounded-md p-1',
  };

  const textSizes = {
    sm: 'text-sm font-medium leading-5',
    md: 'text-base font-black leading-6',
    lg: 'text-lg font-bold leading-7',
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div
        className={`
        ${variants[variant]}
        border rounded-md
        flex items-center justify-center
        flex-shrink-0
      `}>
        <CheckIcon />
      </div>
      <span className={`ml-3 font-medium text-white ${textSizes[size]}`}>{children}</span>
    </div>
  );
};

export default Checkbox;
