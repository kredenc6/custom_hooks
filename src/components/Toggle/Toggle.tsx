import useToggle from "../../customHooks/useToggle";

export default function Toggle() {
  const [toggledValue, toggleValue] = useToggle(false);

  return (
    <div>
      <p>{`${toggledValue}`}</p>
      <button onClick={() => toggleValue()}>toggle</button>
      <button onClick={() => toggleValue(false)}>set false</button>
      <button onClick={() => toggleValue(true)}>set true</button>
    </div>
  );
}
