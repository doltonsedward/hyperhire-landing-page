import Text from '@components/base/Text';
import Image from 'next/image';
import React from 'react';
import ServiceSection from './ServiceSection';

const BrandingSection = () => {
  return (
    <div className="constrain flex justify-between flex-wrap">
      <div>
        <Image src="/assets/secondary-logo.svg" alt="HyperHire" width={187} height={34} />
        <Text variant="small" className="mt-4 mb-[18px] text-blue-gray-80 font-black max-w-[247px] leading-5">
          우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
        </Text>
        <Text variant="caption" className="mb-2 text-blue-gray-60 font-black leading-4">
          010-0000-0000
        </Text>
        <Text variant="caption" className="text-blue-gray-60 font-black leading-4">
          aaaaa@naver.com
        </Text>
      </div>

      <ServiceSection />
    </div>
  );
};

export default BrandingSection;
