import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: any[]
) {
  const { clear, reset } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
