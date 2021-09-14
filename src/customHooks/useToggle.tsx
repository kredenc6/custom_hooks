import { useState } from "react";

export default function useToggle(
  defaultValue: boolean
): [boolean, (value?: boolean | undefined) => void] {
  const [value, setTogledValue] = useState(defaultValue);

  function toggle(value?: boolean) {
    setTogledValue((prev) => (typeof value === "boolean" ? value : !prev));
  }

  return [value, toggle];
}
