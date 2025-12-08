import Text from '@components/base/Text';
import FeaturedItem from '@components/composite/FeaturedItem';
import React from 'react';
import { FeatureDataType } from '../../../../../types/api/features';
import { motion, Variants } from 'framer-motion';

type FeaturedSectionPropsType = {
  featuredData: FeatureDataType[];
  variants?: Variants;
};

const FeaturedSection = ({ featuredData, variants }: FeaturedSectionPropsType) => (
  <>
    {/* desktop view */}
    <div className="hidden md:block">
      <motion.div className="mb-10" variants={variants}>
        <Text variant="subhead" className="mb-[60px] underline underline-offset-auto decoration-solid">
          개발자가 필요하신가요?
        </Text>
      </motion.div>
      <motion.div className="flex gap-12" variants={variants}>
        {featuredData.map((item) => (
          <FeaturedItem key={item.id} title={item.title} content={item.content} />
        ))}
      </motion.div>
    </div>
  </>
);

export default FeaturedSection;
