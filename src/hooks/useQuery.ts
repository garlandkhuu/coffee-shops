import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

//Hook to parse all url query parameters into a JavaScript object
const useQuery = () => {
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  return Object.fromEntries(searchParams);
};

export default useQuery;
