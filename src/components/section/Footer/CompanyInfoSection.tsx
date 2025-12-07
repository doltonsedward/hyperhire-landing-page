import Text from '@components/base/Text';
import CompanyInfoItem from '@components/composite/CompanyInfoItem';
import React from 'react';

const COMPANIES_INFO = [
  {
    label: '상호명',
    content: '하이퍼하이어',
    contentInEnglish: 'Hyperhire India Private Limited',
  },
  {
    label: '대표 CEO',
    content: '김주현',
    contentInEnglish: 'Juhyun Kim',
  },
  {
    label: '사업자등록번호 CIN',
    content: '',
    contentInEnglish: '427-86-01187 U74110DL2016PTC290812 ',
  },
  {
    label: '주소 ADDRESS',
    content: '서울특별시 강남대로 479, 지하 1층 238호 ',
    contentInEnglish: `D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,\n110053 India`,
  },
];

const CompanyInfoSection = () => {
  return (
    <div className="constrain mt-[60px] md:mt-[46px]">
      <div className="flex flex-wrap items-start justify-between">
        {COMPANIES_INFO.map((info) => (
          <CompanyInfoItem
            key={info.label}
            label={info.label}
            content={info.content}
            contentInEnglish={info.contentInEnglish}
          />
        ))}
      </div>

      <Text variant="caption" className="font-black leading-5 mt-7 text-blue-gray-60">
        ⓒ 2023 Hyperhire
      </Text>
    </div>
  );
};

export default CompanyInfoSection;
