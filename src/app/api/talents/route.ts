import { NextResponse } from 'next/server';

const TALENTS_DATA = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    title: '마케팅 전문가',
    location: '인도',
    flag: 'India Flag',
    match: '2y+',
    skills: ['마케팅 전문가', '인스타그램 관리', '광고 집행'],
  },
  {
    id: 2,
    name: 'Maria Silva',
    title: 'UI/UX Designer',
    location: '브라질',
    flag: 'Brazil Flag',
    match: '3y+',
    skills: ['Figma 마스터', '모션 디자인', '브랜딩'],
  },
  {
    id: 3,
    name: '김지은',
    title: '프론트엔드 개발자',
    location: '한국',
    flag: 'South Korea Flag',
    match: '4y+',
    skills: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: 4,
    name: 'Alex Chen',
    title: '백엔드 엔지니어',
    location: '대만',
    flag: 'Taiwan Flag',
    match: '5y+',
    skills: ['Node.js', 'Python', 'AWS'],
  },
  {
    id: 5,
    name: 'Sofia Müller',
    title: '데이터 사이언티스트',
    location: '독일',
    flag: 'Germany Flag',
    match: '3y+',
    skills: ['Python', 'ML', 'TensorFlow'],
  },
];

export async function GET() {
  return NextResponse.json({
    type: 'success',
    data: TALENTS_DATA,
  });
}
