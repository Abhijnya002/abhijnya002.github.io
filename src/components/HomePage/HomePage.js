import React, { useState, useEffect, useRef } from "react";
// Speech input removed - frontend-only mode
import { styled } from "@stitches/react";
import { TypeAnimation } from "react-type-animation";
// import { Parallax } from "react-parallax";
// useSpring and animated removed - no longer needed
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  delay,
} from "framer-motion";
import { zoomIn } from "../../services/variants";
import "../../styles/HomePage.css";
// import ProfilePhoto from `${process.env.PUBLIC_URL}/Kartavya.webp`;

function HomePage({ isBatterySavingOn, scrolled, addTab }) {
  const [key, setKey] = useState(0); // State to reset the animation on click
  const HomeBGRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: HomeBGRef,
    offset: ["start start", "end start"],
    axis: "y",
    smooth: true,
  });
  const blur = useTransform(scrollYProgress, [0, 1], [1, 20]);
  const currentBlur = blur.current !== undefined ? blur.current : 0;
  const appliedBlur = scrolled && currentBlur > 0.3 ? currentBlur : 0;
  const scale = useTransform(scrollYProgress, [0, 0.1, 1], [1.01, 1.01, 1.6]);
  // const opacity = useTransform(scrollYProgress, [0.25, 1], [1, 1]);

  const keywords = [
    "Data Analysis Engineer & Full-Stack Developer | Crafting Scalable AI/ML Systems",
    "Where data meets intelligence • Committed to accuracy and innovation",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 52; // Adjust based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
      duration: 10000,
    });
  };

  // Speech input and AI Companion removed - frontend-only mode

  useEffect(() => {
    const updateScale = () => {
      const homeRow = document.querySelector(".home-row");
      const infoRow = document.querySelector(".info");
      if (!homeRow || !infoRow) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 826 && screenWidth > 576) {
        scaleValue = screenHeight / 826;
      }
      homeRow.style.zoom = `${scaleValue}`;
      infoRow.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <AnimatePresence>
      <div className="homepage-bg-wrapper" ref={HomeBGRef}>
        {/* Video Background */}
        <motion.div
          className="homepage-bg-video-wrapper"
          style={
            !isBatterySavingOn
              ? {
                  scale,
                  filter: `blur(${appliedBlur}px)`,
                  transformOrigin: "top top",
                  willChange: "transform, filter",
                }
              : {}
          }
        >
          <video
            className="homepage-bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={`${process.env.PUBLIC_URL}/home-bg-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        {/* Dark overlay gradient */}
        <div className="homepage-bg-overlay" />
      </div>
      <section className="homepage-container" id="home">
        <div
          className="container"
          // style={{ zoom: "80%", height: "calc(100vh -52px)" }}
        >
          <div className="home-div">
            <div className="home-row info" style={{ zIndex: 99999 }}>
              <motion.h1
                className="name"
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                animate="show"
              >
                Abhijnya Konanduru Gurumurthy
              </motion.h1>

              {/* Changing Text Animation */}
              <motion.div
                className="changing-text-container"
                onClick={() => setKey((prevKey) => prevKey + 1)}
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                animate="show"
              >
                <em>
                  <span className="changing-text">
                    <TypeAnimation
                      key={key} // Forces the component to re-render on click
                      className="changing-text-animation"
                      sequence={[
                        1500,
                        ...keywords.map((text) => [text, 3000]), // Typing each keyword with a pause
                        keywords[keywords.length - 1], // Ensures the last phrase displays permanently
                      ].flat()}
                      speed={{ type: "keyStrokeDelayInMs", value: 17 }} // Fast typing
                      deletionSpeed={{ type: "keyStrokeDelayInMs", value: 8 }}
                      // delay={1000}
                      repeat={0} // No repeat
                      cursor={true}
                    />
                  </span>
                </em>
              </motion.div>

              {/* Styled "Enter Portfolio" Button */}
              <motion.div
                className="enter-button-motioned"
                variants={isBatterySavingOn ? {} : zoomIn(0)}
                initial="hidden"
                animate="show"
                whileHover={{
                  scale: 1.05,
                  transition: { scale: { delay: 0, type: "spring" } },
                }}
                whileTap={{
                  scale: 1,
                  transition: { scale: { delay: 0, type: "spring" } },
                }}
                // drag="false"
                // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                // dragElastic={0.3}
                // dragTransition={{
                //   bounceStiffness: 250,
                //   bounceDamping: 15,
                // }}
              >
                <StyledButton
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  <ButtonShadow />
                  <ButtonEdge />
                  <ButtonLabel>Enter Portfolio</ButtonLabel>
                </StyledButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}

export default HomePage;

// Styled Components for Button
const ButtonPart = styled("span", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: 8,
});

const ButtonShadow = styled(ButtonPart, {
  background: "hsl(0deg 0% 0% / 0.1)",
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
});

const ButtonLabel = styled("span", {
  fontFamily: "Montserrat",
  fontSize: "18px",
  display: "block",
  position: "relative",
  borderRadius: 5,
  color: "#212529",
  padding: "1rem 2rem",
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
});

const StyledButton = styled("button", {
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
  background: "transparent",
  position: "relative",
  padding: 0,
  transition: "filter 250ms ease-out",

  "&:hover": {
    filter: "brightness(110%)",

    [`& ${ButtonLabel}`]: {
      transform: "translateY(-8px)",
    },

    [`& ${ButtonShadow}`]: {
      transform: "translateY(6px)",
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
