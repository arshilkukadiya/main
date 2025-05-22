import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../pages/AwardSection.css";

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const section = document.getElementById("awardsSection");
      const bgText = document.getElementById("awardsBgText");
      const rect = section.getBoundingClientRect();

      // If section is visible in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bgText.classList.add("visible");
      } else {
        bgText.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="awards-section" id="awardsSection">
      <div className="awards-bg-text" id="awardsBgText">
        Global recognition and awards
      </div>

      <div className="awards-cards">
        <div className="award-card red" data-aos="fade-up">
          <h3>A Great Place To Work</h3>
          <p>No. 6 on World's Best Workplaces™ list.</p>
        </div>

        <div className="award-card purple" data-aos="fade-up" data-aos-delay="200">
          <h3>The Top Consulting Firm</h3>
          <p>Consistently ranked as a top firm globally.</p>
        </div>

        <div className="award-card blue" data-aos="fade-up" data-aos-delay="400">
          <h3>An Influential Innovator</h3>
          <p>Recognized for impactful innovation initiatives.</p>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
