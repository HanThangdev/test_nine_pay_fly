import { useLocation } from 'react-router-dom';

interface ParamsObject {
  [key: string]: string;
}

export function useSearchParamsObject(): ParamsObject {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const paramsObject: ParamsObject = {};
  for (const [key, value] of searchParams.entries()) {
    paramsObject[key] = value;
  }

  return paramsObject;
}