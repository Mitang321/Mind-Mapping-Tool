import React from "react";
import "./Branch.css";

const Branch = ({ branch, nodes }) => {
  const startNode = nodes.find((node) => node.id === branch.startNode);
  const endNode = nodes.find((node) => node.id === branch.endNode);

  if (!startNode || !endNode) return null;

  const startX = startNode.x + 75;
  const startY = startNode.y + 20;
  const endX = endNode.x + 75;
  const endY = endNode.y + 20;

  return (
    <svg className="branch">
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Branch;
