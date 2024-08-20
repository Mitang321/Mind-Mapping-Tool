import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./ExportPanel.css";

const ExportPanel = () => {
  const canvasRef = useRef();

  const exportAsImage = async () => {
    const canvasElement = document.querySelector(".canvas");
    const canvas = await html2canvas(canvasElement);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "mindmap.png";
    link.click();
  };

  return (
    <div className="export-panel">
      <button onClick={exportAsImage}>Export as Image</button>
    </div>
  );
};

export default ExportPanel;
