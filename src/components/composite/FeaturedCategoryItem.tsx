import IconContainer from '@components/base/IconContainer';
import Text from '@components/base/Text';
import React from 'react';
import { motion, Variants, easeOut } from 'framer-motion';

type FeaturedCategoryItemPropsType = {
  icon: React.ReactNode;
  title: string;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 50 }, // Mulai dari transparan dan 50px ke kanan
  visible: {
    opacity: 1,
    x: 0, // Berakhir di posisi aslinya
    transition: {
      duration: 0.5, // 500ms
      ease: easeOut,
    },
  },
};

const FeaturedCategoryItem = ({ icon, title }: FeaturedCategoryItemPropsType) => {
  return (
    <motion.div
      className="flex items-center bg-white/20 rounded-xl p-4 overflow-hidden min-w-[332px]"
      variants={itemVariants}>
      <IconContainer className="mr-6">{icon}</IconContainer>
      <Text variant="title">{title}</Text>
    </motion.div>
  );
};

export default FeaturedCategoryItem;
