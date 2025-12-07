'use client';

import type React from 'react';
import { useState } from 'react';
import { TalentCard } from '../../composite/TalentCard';

interface TalentData {
  id: number;
  name: string;
  avatar: string;
  country: string;
  experience: string;
  skills: string[];
}

interface TalentSliderProps {
  talents: TalentData[];
  className?: string;
}

const TalentSection = ({ talents, className = '' }: TalentSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % talents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + talents.length) % talents.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + talents.length) % talents.length;

    if (position === 0) {
      // Front card
      return {
        zIndex: 30,
        transform: 'translateX(0) translateY(0) scale(1)',
        opacity: 1,
      };
    } else if (position === 1) {
      // Second card (slightly behind and to the right)
      return {
        zIndex: 20,
        transform: 'translateX(12px) translateY(6px) scale(0.95)',
        opacity: 0.8,
      };
    } else if (position === 2) {
      // Third card (more behind and to the right)
      return {
        zIndex: 10,
        transform: 'translateX(24px) translateY(12px) scale(0.9)',
        opacity: 0.6,
      };
    } else {
      // Hidden cards
      return {
        zIndex: 0,
        transform: 'translateX(36px) translateY(18px) scale(0.85)',
        opacity: 0,
      };
    }
  };

  return (
    <div className={`relative w-full max-w-xs sm:max-w-sm mx-auto h-80 sm:h-96 ${className}`}>
      {/* Stacked Cards */}
      <div className="relative w-full h-full">
        {talents.map((talent, index) => (
          <div
            key={talent.id}
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={getCardStyle(index)}>
            <TalentCard
              name={talent.name}
              avatar={talent.avatar}
              country={talent.country}
              experience={talent.experience}
              skills={talent.skills}
              className="h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute -left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all hover:shadow-2xl"
        aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute -right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all hover:shadow-2xl"
        aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
        {talents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentSection;
