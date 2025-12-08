import Text from '@components/base/Text';
import CheckboxGroup from '@components/composite/CheckboxGroup';
import FeaturedItem from '@components/composite/FeaturedItem';
import React from 'react';
import { FeatureDataType } from '../../../../../types/api/features';

type FeaturedSectionPropsType = {
  featuredData: FeatureDataType[];
};

const FeaturedSection = ({ featuredData }: FeaturedSectionPropsType) => (
  <>
    {/* desktop view */}
    <div className="hidden md:block">
      <Text variant="subhead" className="mb-[60px] underline underline-offset-auto decoration-solid">
        개발자가 필요하신가요?
      </Text>
      <div className="flex gap-12">
        {featuredData.map((item) => (
          <FeaturedItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  </>
);

export default FeaturedSection;
