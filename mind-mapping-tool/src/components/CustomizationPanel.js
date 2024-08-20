import React from "react";
import "./CustomizationPanel.css";

const CustomizationPanel = ({ selectedNode, setSelectedNode }) => {
  if (!selectedNode) return null;

  const handleColorChange = (e) => {
    setSelectedNode({ ...selectedNode, color: e.target.value });
  };

  const handleSizeChange = (e) => {
    setSelectedNode({ ...selectedNode, size: e.target.value });
  };

  const handleShapeChange = (e) => {
    setSelectedNode({ ...selectedNode, shape: e.target.value });
  };

  return (
    <div className="customization-panel">
      <h3>Customize Node</h3>
      <label>Color:</label>
      <input
        type="color"
        value={selectedNode.color}
        onChange={handleColorChange}
      />

      <label>Size:</label>
      <select value={selectedNode.size} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>Shape:</label>
      <select value={selectedNode.shape} onChange={handleShapeChange}>
        <option value="rectangle">Rectangle</option>
        <option value="circle">Circle</option>
        <option value="ellipse">Ellipse</option>
      </select>
    </div>
  );
};

export default CustomizationPanel;
