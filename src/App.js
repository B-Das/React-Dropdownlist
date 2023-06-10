import { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  // State to track the selected option in the dropdown
  const [selected, setSelected] = useState("Select");

  return (
    <div className="App">
      {/* Heading */}
      <h1>Should you use a dropdown?</h1>
      
      {/* Dropdown component */}
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
