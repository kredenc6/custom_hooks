import { useState } from "react";
import useDebounce from "../../customHooks/useDebounce";

export default function Debounce() {
  const [debounceValue, setDebounceValue] = useState(0);

  useDebounce(() => alert(debounceValue), 1500, [debounceValue]);

  return (
    <div>
      <button onClick={() => setDebounceValue((prev) => prev + 1)}>
        debounce
      </button>
    </div>
  );
}
