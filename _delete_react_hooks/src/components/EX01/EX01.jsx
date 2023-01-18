import { useState } from "react";

function EX01() {
  // exercicio 01
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <div className="exercicio_01">
        <div
          style={{
            fontSize: "50px",
            fontWeight: "900",
            marginBottom: "20px",
            lineHeight: "1.5",
            color: "#55e1a4",
          }}
        >
          {count}
        </div>
        <button style={{ marginRight: "10px" }} onClick={decrement}>
          -
        </button>
        <button style={{ marginRight: "10px" }} onClick={increment}>
          +
        </button>
        <button onClick={resetCounter}>reset counter</button>
      </div>
    </div>
  );
}

export default EX01;
