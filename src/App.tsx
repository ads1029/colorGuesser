import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ColorGuesser from "./ColorGuesser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>ColorGuesser</h1>

      <ColorGuesser />
    </div>
  );
}

export default App;
