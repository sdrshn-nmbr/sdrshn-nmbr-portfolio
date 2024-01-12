import React from "react";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        {/* Computer Engineering with Minor and Concentration */}
        <div className="education-item">
          <h3 className="institution">Purdue University - West Lafayette</h3>
          <p className="degree">Bachelor of Science in Computer Engineering</p>
          <p className="additional-info">
            <span className="minor">Minor in Mathematics</span>{" "}
            <span className="concentration">Concentration in AI/ML</span>
          </p>
          <p className="date">Expected Graduation: Fall 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
