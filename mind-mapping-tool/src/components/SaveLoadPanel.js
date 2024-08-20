import React from "react";
import "./SaveLoadPanel.css";

const SaveLoadPanel = ({ nodes, branches, setNodes, setBranches }) => {
  const saveMindMap = () => {
    const mindMapData = { nodes, branches };
    localStorage.setItem("mindMap", JSON.stringify(mindMapData));
    alert("Mind map saved successfully!");
  };

  const loadMindMap = () => {
    const savedMindMap = localStorage.getItem("mindMap");
    if (savedMindMap) {
      const { nodes, branches } = JSON.parse(savedMindMap);
      setNodes(nodes);
      setBranches(branches);
      alert("Mind map loaded successfully!");
    } else {
      alert("No saved mind map found.");
    }
  };

  return (
    <div className="save-load-panel">
      <button onClick={saveMindMap}>Save Mind Map</button>
      <button onClick={loadMindMap}>Load Mind Map</button>
    </div>
  );
};

export default SaveLoadPanel;
