import { SkillTag } from '@components/base/SkillTag';
import { TalentDataType } from '../../types/api/talents';
import Image from 'next/image';
import Text from '@components/base/Text';

type TalentCardPropsType = {
  talent: TalentDataType;
};

const TalentCard = ({ talent }: TalentCardPropsType) => (
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 w-[300px] md:w-[336px]">
    <div className="py-9 px-4 md:px-9 text-center">
      {/* Avatar */}
      <div className="relative mx-auto w-[64px] h-[64px] md:w-[120px] md:h-[120px] mb-6">
        <Image src={talent.profileUrl} alt={`${talent.name} profile`} fill className=" rounded-full object-cover" />
        <div className="absolute bottom-0 -right-2 md:right-3 w-6 h-4">
          <Image src={talent.flagUrl} alt={`${talent.location} flag`} fill className="rounded-sm" />
        </div>
      </div>

      <Text className="text-lg md:text-2xl font-black leading-9 text-blue-gray-90">{talent.name}</Text>
      <Text className="text-sm md:text-md text-[#4A77FF] font-bold">{talent.match}</Text>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {talent.skills.map((skill, i) => (
          <SkillTag key={i}>{skill}</SkillTag>
        ))}
      </div>
    </div>
  </div>
);

export default TalentCard;
