import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Node.css";

const Node = ({ node, updateNode, deleteNode, addBranch, setSelectedNode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(node.text);

  const handleStop = (e, data) => {
    const updatedNode = { ...node, x: data.x, y: data.y };
    updateNode(updatedNode);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
    setSelectedNode(node);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    const updatedNode = { ...node, text: text };
    updateNode(updatedNode);
  };

  const handleDelete = () => {
    deleteNode(node.id);
  };

  const handleBranch = () => {
    const startNodeId = prompt("Enter the ID of the node to connect from:");
    addBranch(parseInt(startNodeId), node.id);
  };

  const nodeStyle = {
    backgroundColor: node.color,
    width:
      node.size === "small"
        ? "100px"
        : node.size === "large"
        ? "200px"
        : "150px",
    height:
      node.size === "small" ? "30px" : node.size === "large" ? "60px" : "40px",
    borderRadius:
      node.shape === "circle"
        ? "50%"
        : node.shape === "ellipse"
        ? "25%"
        : "5px",
  };

  return (
    <Draggable position={{ x: node.x, y: node.y }} onStop={handleStop}>
      <div className="node" style={nodeStyle}>
        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{node.text}</span>
        )}
        <div className="controls">
          <button onClick={handleBranch}>Branch</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </Draggable>
  );
};

export default Node;
