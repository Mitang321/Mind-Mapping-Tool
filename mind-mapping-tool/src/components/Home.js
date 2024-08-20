import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Mind Mapping Tool</h1>
        <p>Create and organize your thoughts visually.</p>
        <a href="/mindmap" className="home-button">
          Get Started
        </a>
      </header>
    </div>
  );
};

export default Home;
