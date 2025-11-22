'use server';

import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

interface CookieOptions {
  expires?: Date | number;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
}

export async function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): Promise<void> {
  const defaultOptions: CookieOptions = {
    path: '/',
    maxAge: 24 * 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  };

  const cookieOptions = { ...defaultOptions, ...options };
  const cookieStore = await cookies();
  cookieStore.set(name, value, cookieOptions);
}

export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  const value = cookieStore.get(name)?.value;
  return value;
}
