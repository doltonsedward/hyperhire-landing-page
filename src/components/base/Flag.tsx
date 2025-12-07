import type React from 'react';

interface FlagProps {
  country: string;
  className?: string;
}

export const Flag = ({ country, className = '' }: FlagProps) => {
  const flagStyles: Record<string, string> = {
    colombia: 'bg-gradient-to-b from-yellow-400 via-blue-500 to-red-500',
    brazil: 'bg-gradient-to-b from-green-500 via-yellow-400 to-green-500',
    argentina: 'bg-gradient-to-b from-blue-400 via-white to-blue-400',
    chile: 'bg-gradient-to-b from-white via-white to-red-500',
    peru: 'bg-gradient-to-r from-red-500 via-white to-red-500',
    venezuela: 'bg-gradient-to-b from-yellow-400 via-blue-500 to-red-500',
  };

  const flagEmojis: Record<string, string> = {
    colombia: '🇨🇴',
    brazil: '🇧🇷',
    argentina: '🇦🇷',
    chile: '🇨🇱',
    peru: '🇵🇪',
    venezuela: '🇻🇪',
  };

  return (
    <div className={`rounded-sm overflow-hidden flex items-center justify-center border border-gray-300 ${className}`}>
      <span className="text-lg leading-none">{flagEmojis[country] || '🏳️'}</span>
    </div>
  );
};
