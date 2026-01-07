import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { zoomIn, fadeIn } from "../../services/variants";
import { styled } from "@stitches/react";
import "../../styles/AboutPage.css";
import { SpotlightBG } from "./SpotlightBG";
import Resume from "../../assets/Resume-AbhijnyaKg.pdf";

function AboutPage({ isBatterySavingOn, isWindowModalVisible, addTab }) {
  useEffect(() => {
    const updateScale = () => {
      const aboutDiv = document.querySelector(".about-content");
      if (!aboutDiv) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 750 && screenWidth > 576) {
        scaleValue = screenHeight / 750;
      }
      aboutDiv.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
  return (
    <section 
      className="about-section-container" 
      id="about"
    >
      <SpotlightBG />
      <motion.div
        variants={isBatterySavingOn ? {} : zoomIn(0)}
        initial="show"
        whileInView="show"
        exit="hidden"
        className="about-div"
        style={
          isWindowModalVisible
            ? { opacity: 0, transition: "opacity 0.5s ease-in-out" }
            : { opacity: 1, transition: "opacity 0.5s ease-in-out" }
        }
      >
        <div className="about-content glass">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-container">
            <motion.img
              src={`${process.env.PUBLIC_URL}/Abhijnya-Profile-Photo.webp`}
              className="about-image"
              alt="Profile"
              loading="lazy"
              variants={isBatterySavingOn ? {} : fadeIn("right", 200, 0)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            />
            <motion.div className="about-details-wrapper">
              <motion.div
                className="about-description-box"
                variants={isBatterySavingOn ? {} : fadeIn("left", 200, 0)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <span className="about-name">Abhijnya Konanduru Gurumurthy</span>
                <p className="about-role">
                  M.S. in Computer Science, AI/ML Engineer & Full-Stack Developer
                </p>
                <p className="about-description">
                  I'm Abhijnya Konanduru Gurumurthy, a Data and Research Engineer pursuing my M.S. in Computer Science at Syracuse University, with experience at Mercedes-Benz Research and Development. I specialize in building scalable data pipelines, automating large-scale analytics workflows, and developing interactive dashboards using Python, SQL, and Power BI. At Syracuse, I support data-driven policy research through automated API integrations and structured reporting pipelines. Previously at Mercedes-Benz, I optimized analytics systems that improved efficiency by 30% and achieved 99.9% data accuracy, combining technical precision with strategic impact.
                </p>
              </motion.div>
              <motion.h2
                className="about-page-subtitle"
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Learn More About Me From My:
              </motion.h2>
              <motion.div
                className="button-container"
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <motion.a>
                  <StyledButton
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("skills");
                    }}
                  >
                    <ButtonShadow />
                    <ButtonEdge />
                    <ButtonLabel>Skills</ButtonLabel>
                  </StyledButton>
                </motion.a>
                <motion.a>
                  <StyledButton
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                  >
                    <ButtonShadow />
                    <ButtonEdge />
                    <ButtonLabel>Projects</ButtonLabel>
                  </StyledButton>
                </motion.a>
                <motion.a
                  href={Resume}
                  download="Abhijnya-KG-Resume.pdf"
                  className="download-cv"
                  style={{ userSelect: "none" }}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <StyledButton>
                    <ButtonShadow />
                    <ButtonEdge />
                    <ButtonLabel>Resume</ButtonLabel>
                  </StyledButton>
                </motion.a>
              </motion.div>
              <motion.div
                className="button-container"
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <motion.a>
                  <StyledButton
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("experience");
                    }}
                  >
                    <ButtonShadow />
                    <ButtonEdge />
                    <ButtonLabel>Experience</ButtonLabel>
                  </StyledButton>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutPage;

// Styled Components for Custom Button
// Styled Components (Stitches / similar) for a responsive Custom Button

const ButtonPart = styled("span", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: 5,
});

const ButtonShadow = styled(ButtonPart, {
  background: "hsl(0deg 0% 0% / 0.1)",
  borderRadius: 5,
  transform: "translateY(2px)",
  transition: "transform 250ms ease-out",
});

const ButtonEdge = styled(ButtonPart, {
  background: `linear-gradient(
    to left,
    hsl(0deg 0% 69%) 0%,
    hsl(0deg 0% 85%) 8%,
    hsl(0deg 0% 85%) 92%,
    hsl(0deg 0% 69%) 100%
  )`,
  borderRadius: 5,
});

const ButtonLabel = styled("span", {
  fontFamily: "Montserrat",
  fontSize: "18px",
  display: "block",
  position: "relative",
  borderRadius: 5,
  color: "#212529",
  padding: "0.75rem 1.5rem",
  background: "#f8f9fa",
  transform: "translateY(-4px)",
  width: "100%",
  userSelect: "none",
  transition:
    "transform 250ms ease-out, background-color 0.3s ease, color 0.3s ease",

  "&:hover": {
    backgroundColor: "#fcbc1d",
    color: "#212529",
    transform: "scale(1.05)",
  },

  // ——————————————————————————————
  // Responsive adjustments
  "@media (max-width: 992px)": {
    fontSize: "15px",
    padding: "0.6rem 1.2rem",
  },
  "@media (max-width: 576px)": {
    fontSize: "12px",
    padding: "0.5rem 1rem",
  },
  // ——————————————————————————————
});

const StyledButton = styled("button", {
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
  borderRadius: 5,
  background: "transparent",
  position: "relative",
  padding: 0,
  transition: "filter 250ms ease-out",

  "&:hover": {
    filter: "brightness(110%)",

    [`& ${ButtonLabel}`]: {
      transform: "translateY(-6px)",
    },

    [`& ${ButtonShadow}`]: {
      transform: "translateY(4px)",
    },
  },

  "&:active": {
    [`& ${ButtonLabel}`]: {
      transform: "translateY(-2px)",
      transition: "transform 34ms",
    },

    [`& ${ButtonShadow}`]: {
      transform: "translateY(1px)",
      transition: "transform 34ms",
    },
  },
});
