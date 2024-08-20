import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="main-title">Mind Mapping Tool</h1>
        <p className="description"></p>
        <NavLink to="/mindmap" className="get-started-button">
          Get Started
        </NavLink>
      </div>
      <div className="features-section">
        <h2 className="features-title">Features</h2>
        <div className="feature">
          <h3 className="feature-title">Visualize Your Ideas</h3>
          <p className="feature-description">
            Effortlessly create and customize mind maps to visualize your
            thoughts and ideas.
          </p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Intuitive Design</h3>
          <p className="feature-description">
            User-friendly interface that makes mind mapping enjoyable.
          </p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Save & Export</h3>
          <p className="feature-description">
            Save your mind maps and export them as a image for easy sharing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
