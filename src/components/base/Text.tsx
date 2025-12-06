import type React from 'react';

interface TextProps {
  variant?: 'body' | 'small' | 'tiny' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ variant = 'body', children, className = '' }: TextProps) => {
  const variants = {
    body: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
    tiny: 'text-xs leading-relaxed',
    caption: 'text-xs text-muted-foreground',
  };
  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};
