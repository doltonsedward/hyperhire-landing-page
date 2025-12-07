import Divider from '@components/base/Divider';
import Text from '@components/base/Text';
import React from 'react';

type FeaturedItemPropsType = {
  dividerWidth?: number;
  title: string;
  content: string;
  className?: string;
};

const FeaturedItem = ({ dividerWidth = 130, title, content, className }: FeaturedItemPropsType) => {
  return (
    <div className={className}>
      <Divider className="mb-2" width={dividerWidth} />
      <Text className="mb-2" variant="subhead">
        {title}
      </Text>
      <Text className="font-black w-[162px] leading-6 ">{content}</Text>
    </div>
  );
};

export default FeaturedItem;
