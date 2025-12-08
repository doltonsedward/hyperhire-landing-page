import React from 'react';
import Text from '@components/base/Text';
import CheckboxGroup from '@components/composite/CheckboxGroup';

type BenefitSectionPropsType = {
  benefitData: string[];
};

const BenefitSection = ({ benefitData }: BenefitSectionPropsType) => (
  <div className="md:hidden">
    <CheckboxGroup className="md:hidden" items={benefitData} />
    <Text className="text-[#FBFF23] font-black underline decoration-auto mt-4">개발자가 필요하신가요?</Text>
  </div>
);

export default BenefitSection;
