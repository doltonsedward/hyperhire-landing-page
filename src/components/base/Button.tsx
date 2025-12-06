import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-white text-[#4A77FF] font-black rounded-lg text-base hover:opacity-90',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
    outline: 'border border-border bg-background text-foreground hover:bg-muted',
  };
  return (
    <button className={`px-6 py-2 rounded-full font-medium transition ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
