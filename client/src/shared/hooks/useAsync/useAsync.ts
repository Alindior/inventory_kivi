import { DependencyList, useEffect, useMemo, useState } from 'react';

import { UseAsyncData } from './interfaces/UseAsyncData';
import { AsyncMethod } from './types/AsyncMethod';

const useAsync = <T>(method: AsyncMethod<T>, deps: DependencyList = []): UseAsyncData<T> => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T>();

  const wrappedMethod = useMemo(() => method, deps);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await wrappedMethod();
        setData(data);
      } catch (err) {
        setError(err.response.data);
      } finally {
        setLoading(false);
      }
    })();
  }, [wrappedMethod]);

  return { data, isLoading, error };
};

export default useAsync;
