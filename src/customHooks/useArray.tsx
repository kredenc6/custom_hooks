import { useState } from "react";

export default function useArray(defaultArray: any[]) {
  const [array, setArray] = useState(defaultArray);

  const push = (element: any) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback: (element: any) => boolean) => {
    setArray((a) => a.filter(callback));
  };

  const update = (index: number, newElement: any) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length)
    ]);
  };

  const remove = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
}
