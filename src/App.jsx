import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");

  function handleClick(value) {
    if (value === "C") {
      setInput("0");
    } else if (value === "=") {
      try {
        const result = Function(
          '"use strict"; return (' + input + ')'
        )();

        if (!Number.isFinite(result)) {
          setInput("Error");
        } else {
          setInput(String(result));
        }
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input === "0" || input === "Error"
        ? value
        : input + value);
    }
  }

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  return (
    <div className="page">
      <div className="calculator">
        <h1>Basic Calculator</h1>

        <div className="display">{input}</div>

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={
                ["+", "-", "*", "/", "="].includes(btn)
                  ? "operator"
                  : btn === "C"
                  ? "clear"
                  : ""
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;