import React, { useRef } from "react";
import Node from "./Node";
import Branch from "./Branch";
import "./Canvas.css";

const Canvas = ({
  nodes,
  setNodes,
  branches,
  setBranches,
  selectedNode,
  setSelectedNode,
  searchQuery,
}) => {
  const canvasRef = useRef();

  const addNode = (e) => {
    const newNode = {
      id: nodes.length + 1,
      x: e.clientX,
      y: e.clientY,
      text: `Node ${nodes.length + 1}`,
      color: "#f0f0f0",
      size: "medium",
      shape: "rectangle",
    };
    setNodes([...nodes, newNode]);
  };

  const updateNode = (updatedNode) => {
    const updatedNodes = nodes.map((node) =>
      node.id === updatedNode.id ? updatedNode : node
    );
    setNodes(updatedNodes);
  };

  const deleteNode = (nodeId) => {
    setNodes(nodes.filter((node) => node.id !== nodeId));
    setBranches(
      branches.filter(
        (branch) => branch.startNode !== nodeId && branch.endNode !== nodeId
      )
    );
  };

  const addBranch = (startNodeId, endNodeId) => {
    if (startNodeId !== endNodeId) {
      const newBranch = {
        id: branches.length + 1,
        startNode: startNodeId,
        endNode: endNodeId,
      };
      setBranches([...branches, newBranch]);
    }
  };

  const filteredNodes = nodes.filter((node) =>
    node.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="canvas" onDoubleClick={addNode} ref={canvasRef}>
      {branches.map((branch) => (
        <Branch key={branch.id} branch={branch} nodes={nodes} />
      ))}
      {filteredNodes.map((node) => (
        <Node
          key={node.id}
          node={node}
          updateNode={updateNode}
          deleteNode={deleteNode}
          addBranch={addBranch}
          setSelectedNode={setSelectedNode}
        />
      ))}
    </div>
  );
};

export default Canvas;
