import { useState } from "react";

export function useHTTP() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(requestConfig, applyData) {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
          requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
          }
        );

      if (!res.ok) throw new Error('Request failed!');

      const data = await res.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest
  }
}