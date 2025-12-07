import Text from '@components/base/Text';
import React from 'react';

type CompanyInfoItemPropsType = {
  label: string;
  content?: string;
  contentInEnglish?: string;
};

const CompanyInfoItem = ({ label, content, contentInEnglish }: CompanyInfoItemPropsType) => {
  return (
    <div>
      <Text variant="caption" className="mb-3 text-blue-gray-80 font-black leading-4">
        {label}
      </Text>

      {content && (
        <Text variant="caption" className="mb-1 text-blue-gray-60 font-black leading-5">
          {content}
        </Text>
      )}

      {contentInEnglish && (
        <Text variant="caption" className="text-blue-gray-60 font-black leading-5">
          {contentInEnglish}
        </Text>
      )}
    </div>
  );
};

export default CompanyInfoItem;
