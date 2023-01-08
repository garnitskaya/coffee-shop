
import { useRef, useCallback } from 'react';

export const useDebounce = (callback: Function, delay = 500) => {
  const timer = useRef<NodeJS.Timeout>();

  const debouncedCallback = useCallback((...arg) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...arg);
    }, delay)
  }, [callback, delay]);

  return debouncedCallback;
}