import CodeIcon from '@components/base/Icons/CodeIcon';
import KoreaTextIcon from '@components/base/Icons/KoreaTextIcon';
import PersonIcon from '@components/base/Icons/PersonIcon';
import SettingIcon from '@components/base/Icons/SettingIcon';
import ServiceItem from '@components/composite/ServiceItem';
import React from 'react';

const SERVICE_ITEMS = [
  {
    id: 1,
    icon: <CodeIcon />,
    title: '해외 개발자 원격 채용',
    linkLabel: '바로가기',
  },
  {
    id: 2,
    icon: <PersonIcon />,
    title: '해외 개발자 원격 채용',
    linkLabel: '바로가기',
  },
  {
    id: 3,
    icon: <KoreaTextIcon />,
    title: '해외 개발자 원격 채용',
    linkLabel: '바로가기',
  },
  {
    id: 4,
    icon: <SettingIcon />,
    title: '해외 개발자 원격 채용',
    linkLabel: '바로가기',
  },
];

const ServiceSection = () => {
  return (
    <div className="flex flex-wrap">
      {SERVICE_ITEMS.map((item) => (
        <ServiceItem key={item.id} icon={item.icon} title={item.title} linkLabel={item.linkLabel} />
      ))}
    </div>
  );
};

export default ServiceSection;
