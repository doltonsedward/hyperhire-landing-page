import type React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextProps {
  variant?: 'subhead' | 'body' | 'small' | 'caption' | 'title';
  children: React.ReactNode;
  className?: string;
  itemVariants?: Variants;
}

const Text = ({ variant = 'body', children, className = '', itemVariants }: TextProps) => {
  const variants = {
    caption: 'text-xs text-muted-foreground', // font-size: 12px, line-height: 16px, muted color
    small: 'text-sm leading-relaxed', // font-size: 14px, line-height: 20px
    body: 'text-base leading-relaxed', // font-size: 16px, line-height: 24px
    subhead: 'text-lg font-black', // font-size: 18px, line-height: 28px, semi-bold
    title: 'text-2xl font-bold', // font-size: 24px, line-height: 32px, bold
  };
  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};

export default Text;
