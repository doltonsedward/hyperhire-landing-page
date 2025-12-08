'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { TalentDataType } from '../../../types/api/talents';
import TalentCard from '@components/composite/TalentCard';

const talentsData: TalentDataType[] = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    title: '마케팅 전문가',
    location: '인도',
    flag: 'India Flag',
    match: '2y+',
    skills: ['마케팅 전문가', '인스타그램 관리', '광고 집행'],
  },
  {
    id: 2,
    name: 'Maria Silva',
    title: 'UI/UX Designer',
    location: '브라질',
    flag: 'Brazil Flag',
    match: '3y+',
    skills: ['Figma 마스터', '모션 디자인', '브랜딩'],
  },
  {
    id: 3,
    name: '김지은',
    title: '프론트엔드 개발자',
    location: '한국',
    flag: 'South Korea Flag',
    match: '4y+',
    skills: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: 4,
    name: 'Alex Chen',
    title: '백엔드 엔지니어',
    location: '대만',
    flag: 'Taiwan Flag',
    match: '5y+',
    skills: ['Node.js', 'Python', 'AWS'],
  },
  {
    id: 5,
    name: 'Sofia Müller',
    title: '데이터 사이언티스트',
    location: '독일',
    flag: 'Germany Flag',
    match: '3y+',
    skills: ['Python', 'ML', 'TensorFlow'],
  },
];

export default function TalentsSection() {
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
    <div className="relative w-full max-w-5xl mx-auto py-20 overflow-hidden">
      <div className="relative h-96 flex items-center justify-center items-center">
        {/* Arrow Left */}
        <button
          onClick={prev}
          className="absolute left-8 z-50 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all hover:scale-110">
          <ChevronLeft className="w-10 h-10 text-gray-800" />
        </button>

        {/* Arrow Right */}
        <button
          onClick={next}
          className="absolute right-8 z-50 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all hover:scale-110">
          <ChevronRight className="w-10 h-10 text-gray-800" />
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
              containerClass = 'ring-4 ring-cyan-400';
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
