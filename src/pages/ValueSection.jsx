import React from "react";
import "./ValueSection.css";

const ValueSection = () => {
  return (
    <section className="value-section">
      <div className="value-container">
        <h1 className="value-title">360° VALUE</h1>
        <p className="value-subtext">
          Every day, we embrace change and create value for all our stakeholders<br />
          around the world.
        </p>
        <a href="#!" className="value-button">
          See the report <span className="arrow">❯</span>
        </a>
      </div>
    </section>
  );
};

export default ValueSection;
