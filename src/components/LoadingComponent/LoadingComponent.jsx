import React from 'react';
import { useMemo } from 'react';
import useJsonFetch from '../useJsonFetch/useJsonFetch';

const LoadingComponent = () => {
  const opts = useMemo(() => ({ method: 'GET' }), []);
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', opts);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default LoadingComponent;
