import { Badge } from '@components/base/Badge';
import { Heading } from '@components/base/Heading';
import { Text } from '@components/base/Text';
import React from 'react';
import { CheckboxGroup } from './CheckboxGroup';

const HeroOverview = () => {
  return (
    <div className="constrain max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        <Badge variant="accent" className="w-fit">
          풀타임, 파트타임
        </Badge>
        <Heading level={1} className="text-white text-balance">
          최고의 실력을 가진{'\n'}
          외국인 인재를 찾고 계신가요?
        </Heading>
        <Heading level={2} className="text-white/90 font-normal text-balance">
          법률 및 인사관리 부담없이{'\n'}
          1주일 이내에 원격으로 채용해보세요.
        </Heading>
        <Text className="text-white/80">개발자가 필요하신가요?</Text>
        <CheckboxGroup items={['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회']} />
      </div>

      {/* Right Content */}
      {/* <div>Slider</div> */}
    </div>
  );
};

export default HeroOverview;
