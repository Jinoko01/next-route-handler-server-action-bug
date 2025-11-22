'use server';

import { setCookie } from './next-cookie';

export async function setExampleCookie() {
  await setCookie('example', 'exampleValue');
}

export async function fetchExampleCookie() {
  const value = await fetch('http://localhost:3000/api/example', { method: 'GET' });
  const data = await value.json();
  return data.value ?? null;
}
