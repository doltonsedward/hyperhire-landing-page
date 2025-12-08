import DollarCircleIcon from '@components/base/Icons/DollarCircleIcon';
import { motion } from 'framer-motion';

interface PriceBadgeProps {
  amount: string;
  className?: string;
  tailType?: 'center' | 'left' | 'right';
  textColor?: string;
  bgColor?: string;
}

export default function PriceBadge({
  amount,
  tailType = 'center',
  className = '',
  textColor = '#00C696',
  bgColor = '#E9F7EF',
}: PriceBadgeProps) {
  const tailVariant = {
    center: 'left-1/2 -translate-x-1/2',
    left: 'left-1/4 -translate-x-1/4',
    right: 'left-3/4 -translate-x-3/4',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={`relative  flex justify-center ${className}`}>
      <div className="rounded-lg shadow-lg px-4 py-2 flex items-center gap-3" style={{ backgroundColor: bgColor }}>
        <DollarCircleIcon />
        <span className="text-lg font-black" style={{ color: textColor }}>
          {amount}
        </span>

        {/* Tail */}
        <div
          className={`absolute -bottom-3 ${tailVariant[tailType]} border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[18px]`}
          style={{ borderTopColor: bgColor }}
        />
      </div>
    </motion.div>
  );
}
