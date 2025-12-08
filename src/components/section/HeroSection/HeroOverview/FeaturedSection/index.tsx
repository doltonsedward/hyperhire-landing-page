import Text from '@components/base/Text';
import CheckboxGroup from '@components/composite/CheckboxGroup';
import FeaturedItem from '@components/composite/FeaturedItem';
import React from 'react';
import { FeatureDataType } from '../../../../../types/api/features';

type FeaturedSectionPropsType = {
  featuredData: FeatureDataType[];
};

const FeaturedSection = ({ featuredData }: FeaturedSectionPropsType) => (
  <div>
    {/* mobile view */}
    <div className="md:hidden">
      <CheckboxGroup className="md:hidden" items={['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회']} />
      <Text className="text-[#FBFF23] font-black underline decoration-auto mt-4">개발자가 필요하신가요?</Text>
    </div>

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
  </div>
);

export default FeaturedSection;
