import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zoomIn } from "../../services/variants";
import Background from "./Background";
import InvolvementTabPage from "./InvolvementTabPage";
import CareerTabPage from "./CareerTabPage";
import HonorsTabPage from "./HonorsTabPage";
import { SpotlightBG } from "../AboutPage/SpotlightBG";
import "../../styles/ExperiencePage.css";

const tabs = [
  {
    title: "Certification",
    icon: <i className="tab-icon fa-solid fa-certificate" />,
    component: InvolvementTabPage,
  },
  {
    title: "Career",
    icon: <i className="tab-icon fa-solid fa-briefcase" />,
    component: CareerTabPage,
  },
  {
    title: "Honors",
    icon: <i className="tab-icon fa-solid fa-trophy" />,
    component: HonorsTabPage,
  },
];

const ExperiencePage = ({
  addTab,
  isBatterySavingOn,
  isWindowModalVisible,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[1]); // Default tab is "Career"

  useEffect(() => {
    const updateScale = () => {
      const tabsWrapper = document.querySelector(".tabs-wrapper");
      const slideContainer = document.querySelector(".content-container");
      if (!tabsWrapper || !slideContainer) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 826 && screenWidth > 576) {
        scaleValue = screenHeight / 826;
      }
      tabsWrapper.style.scale = `${scaleValue}`;
      slideContainer.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const SelectedComponent = selectedTab.component;

  return (
    <>
      <AnimatePresence>
        <section className="experience-container" id="experience">
          <SpotlightBG />
          <motion.div
            className="experience-div"
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
              className="tabs-wrapper"
              variants={isBatterySavingOn ? {} : zoomIn(0)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              viewport={{ once: true }}
            >
              <motion.div className="tab-highlight" key={`tab-${selectedTab.title}`} />
              {tabs.map((tab) => (
                <motion.button
                  key={tab.title}
                  className={`tab-button${
                    selectedTab.title === tab.title ? " active" : ""
                  }`}
                  onClick={() => setSelectedTab(tab)}
                  whileInView={
                    isBatterySavingOn ? {} : { opacity: 1, scale: 1 }
                  }
                  whileHover={isBatterySavingOn ? {} : { scale: 1.1 }}
                  whileTap={isBatterySavingOn ? {} : { scale: 0.9 }}
                  transition={
                    isBatterySavingOn ? {} : { delay: 0, type: "spring" }
                  }
                  aria-label={tab.title}
                >
                  {tab.icon}
                  {selectedTab.title === tab.title ? (
                    <span className="tab-text">{tab.title}</span>
                  ) : (
                    ""
                  )}
                </motion.button>
              ))}
            </motion.div>
            <motion.div className="content-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab.title}
                  variants={isBatterySavingOn ? {} : zoomIn(0)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  style={{ width: "100%", height: "100%" }}
                >
                  <SelectedComponent
                    addTab={addTab}
                    isBatterySavingOn={isBatterySavingOn}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
};

export default ExperiencePage;
