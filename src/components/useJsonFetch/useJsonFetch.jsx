import { useState, useEffect } from 'react';

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, opts);
        
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [data, loading, error];
};

export default useJsonFetch;
