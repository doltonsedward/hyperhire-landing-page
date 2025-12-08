import Badge from '@components/composite/Badge';
import { Heading } from '@components/base/Heading';
import React from 'react';
import FeaturedSection from './FeaturedSection';
import { FeatureDataType } from '../../../../types/api';
import { motion, easeOut } from 'framer-motion';

type HeroOverViewPropsType = {
  featuredData: FeatureDataType[];
};

// --- 1. Varian untuk Container (Parent) ---
const containerVariants = {
  hidden: { opacity: 0 }, // Parent bisa mulai tersembunyi jika diinginkan
  visible: {
    opacity: 1, // Parent bisa memudar masuk atau hanya mengatur anak
    transition: {
      staggerChildren: 0.2, // Kunci: Jeda 0.2 detik antar animasi anak
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Mulai dari transparan dan sedikit di bawah
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut }, // Durasi dan easing untuk setiap item
  },
};

const HeroOverview = ({ featuredData }: HeroOverViewPropsType) => {
  return (
    <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
      {/* desktop view */}
      <Badge tailPosition="left" textColor="#40E2E8" className="hidden md:flex" variants={itemVariants}>
        풀타임, 파트타임
      </Badge>

      {/* mobile view */}
      <Badge tailPosition="left" bgColor="#8BC4FF" className="md:hidden" variants={itemVariants}>
        풀타임, 파트타임
      </Badge>

      <Heading level={1} className="text-white text-balance" variants={itemVariants}>
        최고의 실력을 가진{'\n'}
        외국인 인재를 찾고 계신가요?
      </Heading>
      <Heading level={2} className="text-white/80 font-normal text-balance" variants={itemVariants}>
        법률 및 인사관리 부담없이{'\n'}
        1주일 이내에 원격으로 채용해보세요.
      </Heading>
      <FeaturedSection featuredData={featuredData} variants={itemVariants} />
    </motion.div>
  );
};

export default HeroOverview;
