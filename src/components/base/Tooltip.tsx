import React from 'react';
import { motion } from 'framer-motion';
import DollarCircleIcon from './Icons/DollarCircleIcon';

export default function Tooltip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative mb-10 w-fit mx-auto">
      <div className="relative z-10 flex items-center gap-4 bg-[#E8F7EF] px-8 py-5 rounded-[2rem] shadow-sm">
        <div>
          <DollarCircleIcon />
        </div>

        <div className="text-[#00C996] text-lg font-black whitespace-nowrap">월 100만원</div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-6 h-6 bg-[#E8F7EF] rotate-45 z-0" />
    </motion.div>
  );
}
