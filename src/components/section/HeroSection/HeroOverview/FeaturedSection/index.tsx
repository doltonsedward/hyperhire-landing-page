import Text from '@components/base/Text';
import CheckboxGroup from '@components/composite/CheckboxGroup';
import FeaturedItem from '@components/composite/FeaturedItem';
import React from 'react';

const FEATURED_DATA = [
  {
    id: 1,
    title: '평균 월 120만원',
    content: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    id: 2,
    title: '최대 3회 인력교체',
    content: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
  },
  {
    id: 3,
    title: '평균 3일, 최대 10일',
    content: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

const FeaturedSection = () => {
  return (
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
          {FEATURED_DATA.map((item) => (
            <FeaturedItem key={item.id} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
