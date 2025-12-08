import { TalentDataType } from '../../../types/api/talents';
import { NextResponse } from 'next/server';

const TALENTS_DATA: TalentDataType[] = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    title: '마케팅 전문가',
    location: '인도',
    flagUrl: '/assets/countries-flag/india.png',
    match: '마케팅 · 2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    profileUrl: '/assets/dummy-profile.jpg',
  },
  {
    id: 2,
    name: 'Maria Silva',
    title: 'UI/UX Designer',
    location: '브라질',
    flagUrl: '/assets/countries-flag/india.png',
    match: '디자인 · 3y+',
    skills: ['Figma 마스터', '모션 디자인', '브랜딩'],
    profileUrl: '/assets/dummy-profile.jpg',
  },
  {
    id: 3,
    name: '김지은',
    title: '프론트엔드 개발자',
    location: '한국',
    flagUrl: '/assets/countries-flag/india.png',
    match: '프론트엔드 · 4y+',
    skills: ['React', 'TypeScript', 'Next.js'],
    profileUrl: '/assets/dummy-profile.jpg',
  },
  {
    id: 4,
    name: 'Alex Chen',
    title: '백엔드 엔지니어',
    location: '대만',
    flagUrl: '/assets/countries-flag/india.png',

    match: '백엔드 · 5y+',
    skills: ['Node.js', 'Python', 'AWS'],
    profileUrl: '/assets/dummy-profile.jpg',
  },
  {
    id: 5,
    name: 'Sofia Müller',
    title: '데이터 사이언티스트',
    location: '독일',
    flagUrl: '/assets/countries-flag/india.png',
    match: '마케팅 · 2y+',
    skills: ['Python', 'ML', 'TensorFlow'],
    profileUrl: '/assets/dummy-profile.jpg',
  },
];

export async function GET() {
  return NextResponse.json({
    type: 'success',
    data: TALENTS_DATA,
  });
}
