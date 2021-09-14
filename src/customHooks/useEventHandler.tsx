import { useEffect, useRef, MutableRefObject } from "react";

export default function useEventListener(eventName: string, handler: () => void, ref: MutableRefObject<HTMLElement | null>) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  })

  useEffect(() => {
    if(!ref.current) return;

    const internalHandler = () => {
      handlerRef.current();
    };
    const nodeReference = ref.current;

    nodeReference.addEventListener(eventName, internalHandler);

    return () => nodeReference.removeEventListener(eventName, internalHandler);
  }, [eventName, ref])
}
