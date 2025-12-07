import React from 'react';
import BrandingSection from './BrandingSection';
import CompanyInfoSection from './CompanyInfoSection';

const Footer = () => {
  return (
    <div className="bg-white py-[60px] md:py-20">
      <BrandingSection />
      <CompanyInfoSection />
    </div>
  );
};

export default Footer;
