import { useState } from "react";

export function TestComponent() {
  const [count, setState] = useState(0);
  console.log("test component가 재호출되었습니다.");

  const handleClick= () => {
    setState(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={handleClick}>
        INCREMENT
      </button>
    </div>
  );
}