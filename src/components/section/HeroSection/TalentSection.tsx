'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TalentCard from '@components/composite/TalentCard';
import CaretLeftIcon from '@components/base/Icons/CaretLeftIcon';
import CaretRightIcon from '@components/base/Icons/CaretRightIcon';
import { TalentDataType } from '../../../types/api/talents';

type TalentsSectionPropsType = {
  talentsData: TalentDataType[];
};

export default function TalentsSection({ talentsData }: TalentsSectionPropsType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % talentsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + talentsData.length) % talentsData.length);
  };

  // Fungsi buat hitung posisi relatif setiap card terhadap currentIndex
  const getPosition = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = diff >= 0 ? diff : diff + talentsData.length;

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1 || normalizedDiff === -talentsData.length + 1) return 'right';
    if (normalizedDiff === talentsData.length - 1 || normalizedDiff === -1) return 'left';
    return 'far'; // jauh (nggak keliatan)
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-20 ">
      <div className="relative h-96 flex items-center justify-center items-center">
        {/* Arrow Left */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 z-50 bg-transparent p-4 transition-all hover:scale-110">
          <CaretLeftIcon />
        </button>

        {/* Arrow Right */}
        <button
          onClick={next}
          className="absolute right-4 md:right-8 z-50 bg-transparent p-4 transition-all hover:scale-110">
          <CaretRightIcon />
        </button>

        {/* Cards Container dengan perspective */}
        <div className="relative w-full h-full flex justify-center items-center" style={{ perspective: '1000px' }}>
          {talentsData.map((talent, index) => {
            const position = getPosition(index);

            // Tentukan style berdasarkan posisi
            let cardStyle = {};
            let containerClass = '';

            if (position === 'center') {
              cardStyle = { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 30 };
            } else if (position === 'left') {
              cardStyle = { x: -200, y: 20, scale: 0.85, opacity: 0.6, zIndex: 20 };
            } else if (position === 'right') {
              cardStyle = { x: 200, y: 20, scale: 0.85, opacity: 0.6, zIndex: 20 };
            } else {
              // Jauh banget, sembunyiin biar nggak ganggu animasi
              cardStyle = { x: 0, scale: 0.7, opacity: 0, zIndex: 1 };
            }

            return (
              <motion.div
                key={talent.id}
                layout
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // easing super smooth
                animate={cardStyle}
                className={`absolute ${containerClass}`}>
                <TalentCard talent={talent} isActive={position === 'center'} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
