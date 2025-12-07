import Image from 'next/image';
import React from 'react';

const BrandingSection = () => {
  return (
    <div className="constrain">
      <Image src="/assets/secondary-logo.svg" alt="HyperHire" width={187} height={34} />
    </div>
  );
};

export default BrandingSection;
