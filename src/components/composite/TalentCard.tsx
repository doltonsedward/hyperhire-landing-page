import { TalentDataType } from '../../types/api/talents';

type TalentCardPropsType = {
  talent: TalentDataType;
  isActive: boolean;
};

const TalentCard = ({ talent, isActive }: TalentCardPropsType) => (
  <div
    className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300"
    style={{ width: '340px' }}>
    <div className="p-8 text-center">
      {/* Avatar */}
      <div className="relative mx-auto w-32 h-32 mb-6">
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-1">
          <div className="bg-white rounded-full p-1">
            <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-full" />
          </div>
        </div>
        <div className="absolute -bottom-3 -right-3 bg-white rounded-full px-4 py-2 shadow-lg text-3xl">
          {talent.flag}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900">{talent.name}</h3>
      <p className="text-cyan-500 font-bold text-lg mt-1">{talent.match}</p>
      <p className="text-gray-700 text-lg mt-4">{talent.title}</p>
      <p className="text-gray-500 mt-1">{talent.location}</p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {talent.skills.map((skill, i) => (
          <span
            key={i}
            className={`px-5 py-2.5 rounded-full text-sm font-medium ${
              isActive ? 'bg-cyan-100 text-cyan-800' : 'bg-gray-100 text-gray-600'
            }`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TalentCard;
