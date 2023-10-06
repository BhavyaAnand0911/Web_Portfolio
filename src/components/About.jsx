import React from "react";
import SKILL from "./skill.jsx";
import "../styles/about.scss";

const About = () => {
  return (
    <>
      <div className="about">
        <span className="aboutHeading">ABOUT ME</span>
        <div className="line"></div>
        <p className="aboutPara">
          You may learn more about me, what I do, and my current qualifications
          here, which are primarily related to technology and programming.
        </p>
        <div className="aboutSection">
          <div className="getToKnow">
            Get to know me!
            <p className="getToKnowMePara">
              Greetings! 👋 I'm a passionate Frontend Web Developer dedicated to
              crafting exceptional user experiences that play a pivotal role in
              the success of websites and web applications. With a keen eye for
              design, an in-depth understanding of web technologies, and a
              strong familiarity with React, I bring a unique blend of
              creativity and technical expertise to the table.
              <br />
              <br />
              You can connect with me on LinkedIn, where I regularly post
              valuable content related to Web Development and Programming. I
              believe in the power of knowledge-sharing and actively contribute
              to the growth of our community. Let's discuss how I can be a
              valuable addition to your team. Thank you for visiting my profile,
              and I look forward to connecting with you and exploring new
              horizons in the world of web development! 🚀
            </p>
            <button className="contactMe">CONTACT ME</button>
          </div>
          <div className="getToKnow">
            My Skills
            <p className="skills">
              <SKILL name={"HTML"} />
              <SKILL name={"CSS"} />
              <SKILL name={"JAVASCRIPT"} />
              <SKILL name={"EXPRESS JS"} />
              <SKILL name={"NODE JS"} />
              <SKILL name={"GITHUB"} />
              <SKILL name={"REACT JS"} />
              <SKILL name={"NEXT JS"} />
              <SKILL name={"GIT"} />
              <SKILL name={"SEO"} />
              <SKILL name={"SASS"} />
              <SKILL name={"SQL"} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
