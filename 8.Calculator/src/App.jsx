// Importing the useState hook from React to manage component state
import { useState } from "react";
// Importing external CSS styling
import "./App.css";

// Main App component
export default function App() {
  // State variable `input` stores the current input shown on the calculator screen
  const [input, setInput] = useState("");
  // State variable `expression` stores the full evaluated expression (optional)
  const [expression, setExpression] = useState("");

  // Array of calculator buttons to render dynamically
  const buttons = [
    "7", "8", "9", "/",     // Row 1
    "4", "5", "6", "*",     // Row 2
    "1", "2", "3", "-",     // Row 3
    "0", ".", "=", "+"      // Row 4
  ];

  // Function to handle button clicks
  const handleClick = (val) => {
    if (val === "C") {
      // Clear all inputs and expressions
      setInput("");
      setExpression("");
    } else if (val === "⌫") {
      // Backspace: remove last character from input
      setInput(input.slice(0, -1));
    } else if (val === "=") {
      try {
        // If '=' is pressed, evaluate the expression using eval()
        // Save the expression for display, then evaluate it
        setExpression(input + " =");
        setInput(eval(input).toString()); // Convert result to string and display
      } catch {
        // If invalid expression, show error
        setInput("Error");
        setExpression("");
      }
    } else {
      // For numbers/operators, add the pressed value to the current input
      setInput(input + val);
    }
  };

  // JSX to render the calculator UI
  return (
    <div className="calc">
      {/* Display section */}
      <div className="display">
        {/* Shows expression like "3+2=" above the result */}
        <div className="expression">{expression}</div>
        {/* Shows the current input or result */}
        <input value={input} readOnly />
      </div>

      {/* Button section */}
      <div className="keys">
        {/* Render each button using map() */}
        {buttons.map(b => (
          <button key={b} onClick={() => handleClick(b)}>{b}</button>
        ))}
        
        {/* Additional buttons for Clear and Backspace */}
        <button className="finalButton" onClick={() => handleClick("C")}>C</button>
        <button className="finalButton" onClick={() => handleClick("⌫")}>⌫</button>
      </div>
    </div>
  );
}
