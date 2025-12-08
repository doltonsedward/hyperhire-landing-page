import { NextResponse } from 'next/server';

const BENEFIT_DATA = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];

export async function GET() {
  return NextResponse.json({
    type: 'success',
    data: BENEFIT_DATA,
  });
}
