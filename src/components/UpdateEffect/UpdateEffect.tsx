import { useState } from "react";
import useUpdateEffect from "../../customHooks/useUpdateEffect";

export default function UpdateEffect() {
  const [updateEffectValue, setUpdateEffectValue] = useState(0);
  const handleClick = () => {
    setUpdateEffectValue((prev) => prev + 1);
  };
  useUpdateEffect(() => alert(updateEffectValue), [updateEffectValue]);

  return (
    <div>
      <button onClick={handleClick}>updateEffect()</button>
    </div>
  );
}
