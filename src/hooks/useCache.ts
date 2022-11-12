import { QueryKey, useQueryClient } from '@tanstack/react-query';

const useCache = <R>(key: QueryKey) => {
  const client = useQueryClient();

  return client.getQueryData(key) as R;
};

export default useCache;
