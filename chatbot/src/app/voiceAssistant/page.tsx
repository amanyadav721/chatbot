
/* eslint-disable */

'use client';

import { useEffect, useState } from 'react';
import ClientComponent from "./components/ClientComponent";

export default function Voice() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/api/getHumeToken');
        const data = await response.json();
        
        if (data.error) {
          setError(data.error);
          return;
        }
        
        setAccessToken(data.accessToken);
      } catch (err) {
        setError('Failed to fetch access token');
      }
    };

    fetchToken();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!accessToken) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div>
      <ClientComponent accessToken={accessToken} />
    </div>
  );
}