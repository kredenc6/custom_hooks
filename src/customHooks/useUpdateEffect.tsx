import { useEffect, useRef } from "react";

export default function useUpdateEffect(
  callback: () => void,
  dependencies: any[]
) {
  const updateFlag = useRef(false);

  useEffect(() => {
    if (!updateFlag.current) {
      updateFlag.current = true;
      return;
    }

    callback();
  }, [...dependencies]);
}
