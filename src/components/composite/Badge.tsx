import { motion, Variants } from 'framer-motion';

interface PriceBadgeProps {
  children: React.ReactNode;
  className?: string;
  tailPosition?: 'center' | 'left' | 'right';
  textColor?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  variants?: Variants;
}

export default function Badge({
  children,
  tailPosition = 'center',
  className = '',
  textColor = 'white',
  bgColor = 'white',
  icon,
  variants,
}: PriceBadgeProps) {
  const tailVariant = {
    center: 'left-1/2 -translate-x-1/2',
    left: 'left-2',
    right: 'left-3/4 -translate-x-3/4',
  };

  const badgePosition = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={`relative flex ${badgePosition[tailPosition]} ${className}`}
      variants={variants}>
      <div className="rounded-lg px-4 py-2 flex items-center gap-3" style={{ backgroundColor: bgColor }}>
        {icon}
        <span className="text-lg font-black" style={{ color: textColor }}>
          {children}
        </span>

        {/* Tail */}
        <div
          className={`absolute -bottom-3 ${tailVariant[tailPosition]} border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[18px]`}
          style={{ borderTopColor: bgColor }}
        />
      </div>
    </motion.div>
  );
}
