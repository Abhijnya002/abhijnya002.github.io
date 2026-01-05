import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { zoomIn } from "../../services/variants";
import { fetchEducation } from "../../services/educationService";
import "../../styles/EducationPage.css";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const offset = 52; // Adjust based on your navbar height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const EducationPage = ({ isBatterySavingOn, isWindowModalVisible }) => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const getEducation = async () => {
      try {
        const data = await fetchEducation();
        // Keep Syracuse University first (already in correct order in portfolioData.js)
        setEducationList(data);
      } catch (error) {
        console.error("Error fetching education:", error);
      }
    };
    getEducation();
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const educationContainer = document.querySelector(".education-content");
      if (!educationContainer) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 750 && screenWidth > 576) {
        scaleValue = screenHeight / 750;
      }
      educationContainer.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section className="education-container" id="education">
      <motion.div
        className="education-div"
        variants={isBatterySavingOn ? {} : zoomIn(0)}
        initial="show"
        whileInView="show"
        exit="hidden"
        style={
          isWindowModalVisible
            ? { opacity: 0, transition: "opacity 0.5s ease-in-out" }
            : { opacity: 1, transition: "opacity 0.5s ease-in-out" }
        }
      >
        <motion.div
          className="education-content"
          variants={isBatterySavingOn ? {} : zoomIn(0)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: true }}
        >
          <h2 className="education-section-title">Academic Credentials</h2>
          <div className="education-cards-container">
            {educationList.map((education, index) => (
              <motion.div
                key={education._id}
                className="education-card"
                variants={isBatterySavingOn ? {} : zoomIn(0.2 * index)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                viewport={{ once: true }}
              >
                <div className="education-card-content">
                  <div className="education-logo-container">
                    <img
                      src={education.institutionLogo}
                      alt={education.institution || "Institution"}
                      className="education-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="education-details">
                    <h3 className="education-degree">{education.degree}</h3>
                    <p className="education-institution">{education.institution}</p>
                    <p className="education-location">{education.location}</p>
                  </div>
                  <div className="education-meta">
                    <p className="education-period">{education.period}</p>
                    <p className="education-gpa">
                      {education.degree.includes("Bachelor") ? "CGPA" : "GPA"}: {education.gpa}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationPage;

