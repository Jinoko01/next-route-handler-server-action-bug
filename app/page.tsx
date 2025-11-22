'use client';

import { useState } from 'react';
import { fetchExampleCookie, setExampleCookie } from './serverActions';

export default function Home() {
  const [exampleValue, setExampleValue] = useState<string | null>(null);

  const handleFetchCookie = async () => {
    const value = await fetchExampleCookie();
    setExampleValue(value);
  };

  return (
    <div>
      <div>
        <span>set example cookie</span>
        <form action={setExampleCookie}>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <button onClick={handleFetchCookie}>Get example cookie</button>
      <span>{exampleValue}</span>
    </div>
  );
}
