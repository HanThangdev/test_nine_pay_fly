import { useLayoutEffect, useRef } from 'react';

function useScrollToLastElementChild<T extends HTMLElement>(deps?: Array<any>) {
  const containerRef = useRef<T | null>(null);
  useLayoutEffect(() => {
    containerRef.current?.lastElementChild?.scrollIntoView();
  }, deps);

  return { containerRef };
}

export default useScrollToLastElementChild;
