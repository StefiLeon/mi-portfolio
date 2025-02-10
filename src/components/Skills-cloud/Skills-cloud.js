import { React, useEffect, useRef } from "react";
import "./Skills-cloud.css";

const SkillsCloud = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("section in view");
            entry.target.classList.add("in-view");
          } else {
            console.log("section out of view");
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Analytics",
    "Photoshop",
    "Lightroom",
    "Figma",
    "CapCut",
    "Wordpress",
    "Mongo DB",
    "SQL",
    "Tableau",
    "Meta Business",
    "Google Ads",
    "Tweetdeck/Hootsuite",
    "Premiere Pro",
    "GitHub",
  ];

  return (
    <section className="skills-cloud" id="skills-cloud" ref={sectionRef}>
      <h3 className="h3-background">¿Qué tecnologías manejo?</h3>
      <div className="cloud">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsCloud;
