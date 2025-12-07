import IconContainer from '@components/base/IconContainer';
import RightSquareIcon from '@components/base/Icons/RightSquareIcon';
import Text from '@components/base/Text';
import Link from 'next/link';
import React from 'react';

type ServiceItemPropsType = {
  icon: React.ReactNode;
  title: string;
  linkTo?: string;
  linkLabel: string;
};

const ServiceItem = ({ icon, title, linkTo = '#', linkLabel }: ServiceItemPropsType) => (
  <div className="p-4 pt-[18px] md:pt-0">
    <IconContainer className="bg-[#EFF1F6] p-2 rounded-lg w-fit">{icon}</IconContainer>
    <Text className="mt-3 mb-4 text-blue-gray-80 font-black leading-5 min-h-[42px]">{title}</Text>
    <div className="flex">
      <Text variant="small" className="mr-1 font-black leading-5 text-blue-gray-60 ">
        {linkLabel}
      </Text>
      <Link href={linkTo}>
        <RightSquareIcon size={16} />
      </Link>
    </div>
  </div>
);

export default ServiceItem;
