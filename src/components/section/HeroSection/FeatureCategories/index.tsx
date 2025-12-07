import BoxIcon from '@components/base/Icons/BoxIcon';
import CallIcon from '@components/base/Icons/CallIcon';
import ImageIcon from '@components/base/Icons/ImageIcon';
import MarketingIcon from '@components/base/Icons/MarketingIcon';
import TargetIcon from '@components/base/Icons/Target';
import FeaturedCategoryItem from '@components/composite/FeaturedCategoryItem';
import React from 'react';

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

const FeatureCategories = () => {
  return (
    <div className="constrain hidden md:flex gap-[10px] flex-nowrap">
      {FEATURED_CATEGORIES.map((category) => (
        <FeaturedCategoryItem key={category.id} icon={category.icon} title={category.title} />
      ))}
    </div>
  );
};

export default FeatureCategories;
