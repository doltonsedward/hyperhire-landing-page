import React from 'react';

type IconContainerPropsType = {
  children: React.ReactNode;
  className?: string;
};

const IconContainer = ({ children, className }: IconContainerPropsType) => {
  return <div className={`bg-white/40 p-3 rounded-lg ${className}`}>{children}</div>;
};

export default IconContainer;
