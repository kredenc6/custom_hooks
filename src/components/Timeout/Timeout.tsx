import { useState, useCallback } from "react";
import useTimeout from "../../customHooks/useTimeout";

export default function Timeout() {
  const [timeoutValue, setTimeoutValue] = useState(-1);
  const [randomSingleDigit, setRandomSingleDigit] = useState(1);
  const timeoutCallbackFun = useCallback(
    () => setTimeoutValue(randomSingleDigit),
    [randomSingleDigit]
  );
  const { clear, reset } = useTimeout(
    timeoutCallbackFun,
    randomSingleDigit * 1000
  );

  return (
    <div>
      <p>{timeoutValue}</p>
      <button onClick={clear}>clear timeout</button>
      <button onClick={reset}>reset timeout</button>
      <button
        onClick={() => setRandomSingleDigit(Math.floor(Math.random() * 10))}
      >
        random
      </button>
      <p>{randomSingleDigit}</p>
    </div>
  );
}
