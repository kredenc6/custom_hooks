import useArray from "../../customHooks/useArray";

export default function ArrayComp() {
  const { array, clear, filter, push, remove, set, update } = useArray([1, 2, 3, 4, 5]);

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(69)}>Add 69</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((el) => el < 4)}>
        Keep numbers less than four
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
