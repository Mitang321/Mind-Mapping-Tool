import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Node.css";

const Node = ({ node, updateNode, deleteNode, addBranch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(node.text);

  const handleStop = (e, data) => {
    const updatedNode = { ...node, x: data.x, y: data.y };
    updateNode(updatedNode);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
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

  return (
    <Draggable position={{ x: node.x, y: node.y }} onStop={handleStop}>
      <div className="node">
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
