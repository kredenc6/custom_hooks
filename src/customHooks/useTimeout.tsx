import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<null | number>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback])

  const set = useCallback(() => 
    timeoutRef.current = window.setTimeout(callbackRef.current, delay),
    [delay]
  );

  const clear = useCallback(
    () => {
      if(timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    },
    []
  );

  useEffect(() => {
    set();
    return clear;
  }, [set, clear])

  const reset = useCallback(() => {
    clear();
    set();
    },
    [set, clear]
  );

  return { clear, reset };
}
