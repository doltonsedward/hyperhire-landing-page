import BoxIcon from '@components/base/Icons/BoxIcon';
import CallIcon from '@components/base/Icons/CallIcon';
import ImageIcon from '@components/base/Icons/ImageIcon';
import MarketingIcon from '@components/base/Icons/MarketingIcon';
import TargetIcon from '@components/base/Icons/Target';
import FeaturedCategoryItem from '@components/composite/FeaturedCategoryItem';
import React from 'react';
import { motion } from 'framer-motion';

const FEATURED_CATEGORIES = [
  {
    id: 1,
    icon: <MarketingIcon />,
    title: '해외 마케팅',
  },
  {
    id: 2,
    icon: <ImageIcon />,
    title: '퍼블리셔',
  },
  {
    id: 3,
    icon: <BoxIcon />,
    title: '캐드원(제도사)',
  },
  {
    id: 4,
    icon: <TargetIcon />,
    title: '해외',
  },
  {
    id: 5,
    icon: <CallIcon />,
    title: '해외 CS',
  },
];

const containerVariants = {
  hidden: { transition: { staggerChildren: 0.05 } },
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
const FeatureCategories = () => {
  return (
    <motion.div
      className="constrain hidden md:flex gap-[10px] flex-nowrap mb-[60px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {FEATURED_CATEGORIES.map((category) => (
        <FeaturedCategoryItem key={category.id} icon={category.icon} title={category.title} />
      ))}
    </motion.div>
  );
};

export default FeatureCategories;
