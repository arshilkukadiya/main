 
import React from "react";
import "./Insights.css";
// import insightImage from "../assets/insights/1.png"

const insightsData = [
  {
    tag: "PERSPECTIVE",
    title: "Navigating the new tariff landscape and its economic impact",
    img: require("../assets/insights/01.webp"),
  },
  {
    tag: "CASE STUDY",
    title: "AI personalities, real connection",
    img: require("../assets/insights/1.png"),
  },
  {
    tag: "RESEARCH REPORT",
    title: "Blueprint for success",
    img: require("../assets/insights/1.png"),
  },
  {
    tag: "CASE STUDY",
    title: "Uber hails a new era for advertising",
    img: require("../assets/insights/1.png"),
  },
  {
    tag: "CASE STUDY",
    title: "Vodafone pioneers shared services operations",
    img: require("../assets/insights/1.png"),
  },
  {
    tag: "RESEARCH REPORT",
    title: "Customer service on the brink: Future growth",
    img: require("../assets/insights/1.png"),
  },
  {
    tag: "RESEARCH REPORT",
    title: "Making reinvention real with gen AI",
    img: require("../assets/insights/1.png"),
  },
  {
    tag: "RESEARCH REPORT",
    title: "Powering the future of US data centers",
    img: require("../assets/insights/1.png"),
  },
];

const Insights = () => {
  return (
    <section className="insights-section ">
      <div className="container">
        <div className="row">
          {insightsData.map((item, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div
                className="insight-card"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="insight-overlay">
                  <p className="insight-tag">{item.tag}</p>
                  <h5 className="insight-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
