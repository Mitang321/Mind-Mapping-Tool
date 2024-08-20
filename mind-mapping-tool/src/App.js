import React, { useState, useReducer } from "react";
import Canvas from "./components/Canvas";
import CustomizationPanel from "./components/CustomizationPanel";
import SaveLoadPanel from "./components/SaveLoadPanel";
import ExportPanel from "./components/ExportPanel";
import "./App.css";

const initialState = {
  nodes: [],
  branches: [],
  history: [],
  redoStack: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    case "UNDO":
      if (state.history.length === 0) return state;
      const lastState = state.history[state.history.length - 1];
      return {
        ...lastState,
        history: state.history.slice(0, -1),
        redoStack: [...state.redoStack, state],
      };
    case "REDO":
      if (state.redoStack.length === 0) return state;
      const nextState = state.redoStack[state.redoStack.length - 1];
      return {
        ...nextState,
        history: [...state.history, state],
        redoStack: state.redoStack.slice(0, -1),
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        history: [
          ...state.history,
          { nodes: state.nodes, branches: state.branches },
        ],
        redoStack: [],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { nodes, branches, history, redoStack } = state;

  const [searchQuery, setSearchQuery] = useState("");

  const setNodes = (nodes) => {
    dispatch({ type: "UPDATE_HISTORY" });
    dispatch({ type: "SET_STATE", payload: { nodes } });
  };

  const setBranches = (branches) => {
    dispatch({ type: "UPDATE_HISTORY" });
    dispatch({ type: "SET_STATE", payload: { branches } });
  };

  const undo = () => dispatch({ type: "UNDO" });
  const redo = () => dispatch({ type: "REDO" });

  return (
    <div className="App">
      <h1>Mind Mapping Tool</h1>
      <div className="toolbar">
        <button
          onClick={undo}
          className="undo-button"
          disabled={history.length === 0}
        >
          Undo
        </button>
        <button
          onClick={redo}
          className="redo-button"
          disabled={redoStack.length === 0}
        >
          Redo
        </button>
      </div>
      <div className="search-panel">
        <input
          type="text"
          placeholder="Search nodes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <SaveLoadPanel
        nodes={nodes}
        branches={branches}
        setNodes={setNodes}
        setBranches={setBranches}
      />
      <ExportPanel />
      <CustomizationPanel selectedNode={null} setSelectedNode={() => {}} />
      <Canvas
        nodes={nodes}
        setNodes={setNodes}
        branches={branches}
        setBranches={setBranches}
        selectedNode={null}
        setSelectedNode={() => {}}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
