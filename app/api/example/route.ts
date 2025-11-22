import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from '../../next-cookie';

export async function GET(req: NextRequest) {
  const value = await getCookie('example');
  console.log(value);

  return NextResponse.json({ value });
}
