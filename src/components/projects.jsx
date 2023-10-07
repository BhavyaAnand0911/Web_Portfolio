import React from "react";
import ProjectCard from "../components/projectCard";
import content from "../assets/Content/project.json";
import "../styles/projects.scss";

const arr = Object.values(content);

const projects = () => {
  return (
    <>
      <div className="projects">
        <span className="projectsHeading">PROJECTS</span>
        <div className="line"></div>
        <p className="projectPara">
          You may discover some of my individual projects here, each of which
          has connections to its own code base and deployed web sites.
        </p>
        {arr.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              name={item.name}
              text={item.text}
              link={item.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default projects;
