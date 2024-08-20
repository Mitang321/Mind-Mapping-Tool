import React, { useState } from "react";
import Canvas from "./components/Canvas";
import CustomizationPanel from "./components/CustomizationPanel";
import "./App.css";

function App() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="App">
      <h1>Mind Mapping Tool</h1>
      <CustomizationPanel
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
      <Canvas selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
    </div>
  );
}

export default App;
