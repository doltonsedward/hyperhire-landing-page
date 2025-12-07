import IconContainer from '@components/base/IconContainer';
import Text from '@components/base/Text';
import React from 'react';

type FeaturedCategoryItemPropsType = {
  icon: React.ReactNode;
  title: string;
};

const FeaturedCategoryItem = ({ icon, title }: FeaturedCategoryItemPropsType) => {
  return (
    <div className="flex items-center bg-white/20 rounded-xl p-4 overflow-hidden min-w-[332px]">
      <IconContainer className="mr-6">{icon}</IconContainer>
      <Text variant="title">{title}</Text>
    </div>
  );
};

export default FeaturedCategoryItem;
