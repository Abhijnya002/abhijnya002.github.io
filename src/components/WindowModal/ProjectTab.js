import React from "react";
import { motion } from "framer-motion";
import "../../styles/ProjectTab.css";
import github from "../../assets/img/icons/github.png";
import youtube from "../../assets/img/icons/youtube.png";
import devpost from "../../assets/img/icons/devpost.png";
import web from "../../assets/img/icons/web.png";
import ImagesCarousel from "./ImageCarousel"; // Import ImageCarousel component

const ProjectTab = ({ data, isBatterySavingOn }) => {
  const renderLogos = (urls) => {
    if (!urls) return null; // Check if URLs exist

    return Object.entries(urls).map(([key, value]) => {
      // Use the key to determine icon type: 'github' -> github icon, 'demo' -> web icon
      const iconName = getIconForLink(key, value);
      return (
        <motion.a
          key={key}
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0, rotate: 0 }}
          animate={
            isBatterySavingOn ? {} : { opacity: 1, scale: 1, rotate: 360 }
          }
          transition={
            isBatterySavingOn
              ? {}
              : {
                  delay: 1.7 + 0.4 * Object.keys(urls).indexOf(key),
                  type: "ease",
                }
          }
          viewport={{ once: true }}
        >
          <motion.img
            src={`${iconName}`}
            alt={`${key} logo`}
            className="project-window-logo"
            whileHover={
              isBatterySavingOn
                ? {}
                : {
                    scale: 1.01,
                    rotate: 360,
                  }
            }
            whileTap={
              isBatterySavingOn
                ? {}
                : {
                    scale: 0.99,
                    rotate: 0,
                  }
            }
            transition={
              isBatterySavingOn
                ? {}
                : {
                    type: "ease",
                  }
            }
            viewport={{ once: true }}
          />
        </motion.a>
      );
    });
  };

  const getIconForLink = (key, link) => {
    // Use the key to determine icon: 'github' -> github icon, 'demo' -> web icon
    if (key === "github") return github;
    if (key === "demo") return web;
    // Fallback: check the link itself
    if (link.includes("github")) return github;
    if (link.includes("youtube") || link.includes("youtu")) return youtube;
    if (link.includes("devpost")) return devpost;
    return web; // Default to web icon for demo links
  };

  return (
    <>
      <motion.div className="project-window-tab-container">
        {/* Images Section */}
        {data.projectImages && (
          <div className="project-image-container">
            <ImagesCarousel
              data={data.projectImages} // Repeat images 9 times
              title={data.projectTitle || "Project"}
              isBatterySavingOn={isBatterySavingOn}
            />
          </div>
        )}

        <motion.div
          className="project-window-content"
          initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0.8 }}
          animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
          transition={isBatterySavingOn ? {} : { delay: 0.5, type: "ease" }}
        >
          {data.projectTitle && (
            <motion.h2
              className="project-window-title"
              initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
              animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
              transition={
                isBatterySavingOn
                  ? {}
                  : { delay: 0.7, type: "ease", repeatType: "mirror" }
              }
              viewport={{ once: true }}
            >
              {data.projectTitle}
            </motion.h2>
          )}

          {data.projectSubTitle && data.projectSubTitle !== "NA" && (
            <motion.h3
              className="project-window-subtitle"
              initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
              animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
              transition={isBatterySavingOn ? {} : { delay: 0.9, type: "ease" }}
              viewport={{ once: true }}
            >
              {data.projectSubTitle}
            </motion.h3>
          )}

          {data.projectTimeline && data.projectTimeline !== "NA" && (
            <motion.h4
              className="project-window-timeline"
              initial={isBatterySavingOn ? {} : { opacity: 0 }}
              animate={isBatterySavingOn ? {} : { opacity: 1 }}
              transition={isBatterySavingOn ? {} : { delay: 1.1, type: "ease" }}
              viewport={{ once: true }}
            >
              {data.projectTimeline}
            </motion.h4>
          )}

          {data.projectTagline && data.projectTagline !== "NA" && (
            <motion.h4
              className="project-window-tagline"
              initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
              animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
              // drag
              // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              // dragElastic={0.3}
              // dragTransition={{
              //   bounceStiffness: 250,
              //   bounceDamping: 15,
              // }}
              whileHover={isBatterySavingOn ? {} : { scale: 1.01 }}
              whileTap={
                isBatterySavingOn
                  ? {}
                  : {
                      scale: 0.99,
                      boxsizing: "border-box",
                      outline: "1px solid limegreen !important",
                    }
              }
              transition={isBatterySavingOn ? {} : { delay: 1.3, type: "ease" }}
              viewport={{ once: true }}
            >
              {data.projectTagline}
            </motion.h4>
          )}

          {data.projectURLs && Object.keys(data.projectURLs).length > 0 && (
            <motion.div
              className="project-window-urls"
              initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
              // drag
              // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              // dragElastic={0.3}
              // dragTransition={{
              //   bounceStiffness: 250,
              //   bounceDamping: 15,
              // }}
              animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
              whileHover={isBatterySavingOn ? {} : { scale: 1.01 }}
              whileTap={isBatterySavingOn ? {} : { scale: 0.98 }}
              transition={isBatterySavingOn ? {} : { delay: 1.5, type: "ease" }}
              viewport={{ once: true }}
            >
              {renderLogos(data.projectURLs)}
            </motion.div>
          )}

          {data.projectParagraphs && data.projectParagraphs.length > 0 && (
            <motion.div
              className="project-window-paragraphs glass"
              initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
              animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
              transition={isBatterySavingOn ? {} : { delay: 2, type: "ease" }}
              viewport={{ once: true }}
            >
              {data.projectParagraphs.map((para, index) => (
                <motion.p
                  key={index}
                  className="project-window-paragraph"
                  initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
                  animate={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
                  transition={
                    isBatterySavingOn ? {} : { delay: 0, type: "ease" }
                  }
                  viewport={{ once: true }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectTab;
