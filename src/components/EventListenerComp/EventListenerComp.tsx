import { useRef, useState } from "react";
import useEventListener from "../../customHooks/useEventHandler";

export default function EventListenerComp() {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<null | HTMLDivElement>(null);

  useEventListener(
    "click",
    () => {
      console.log(`Has been clicked ${count + 1} times.`);
      setCount(prev => prev + 1);
    },
    nodeRef
  );
  
  return (
    <div ref={nodeRef} style={{ width: "80%", height: "30vh", margin: "auto", backgroundColor: "green" }}>
      <h1>I'm using useEventListener custom hook ;-)</h1>
    </div>
  );
}
