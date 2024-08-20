import React, { useState } from "react";
import Canvas from "./components/Canvas";
import CustomizationPanel from "./components/CustomizationPanel";
import SaveLoadPanel from "./components/SaveLoadPanel";
import ExportPanel from "./components/ExportPanel";
import "./App.css";

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [branches, setBranches] = useState([]);

  return (
    <div className="App">
      <h1>Mind Mapping Tool </h1>
      <SaveLoadPanel
        nodes={nodes}
        branches={branches}
        setNodes={setNodes}
        setBranches={setBranches}
      />
      <ExportPanel />
      <CustomizationPanel
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
      <Canvas
        nodes={nodes}
        setNodes={setNodes}
        branches={branches}
        setBranches={setBranches}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
    </div>
  );
}

export default App;
