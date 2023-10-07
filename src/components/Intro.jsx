import React from "react";
import { Link } from "react-scroll";
import { BsMouse } from "react-icons/bs";
import "../styles/intro.scss";
import github from "../assets/github.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import leet from "../assets/leetcode.png";

const Intro = () => {
  return (
    <>
      <section className="intro" id="intro">
        <div className="links">
          <a href="https://www.instagram.com/_bhavya__anand_/" target="_blank">
            <img src={insta} alt="links" className="link"></img>
          </a>
          <a href="https://github.com/BhavyaAnand0911" target="_blank">
            <img src={github} alt="links" className="link"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-anand0911/"
            target="_blank"
          >
            <img src={linkedin} alt="links" className="link"></img>
          </a>
          <a href="https://leetcode.com/BhavyaAnand0911/" target="_blank">
            <img src={leet} alt="links" className="link"></img>
          </a>
        </div>
        <div className="introContent">
          <span className="hello">
            HEY,
            <span className="introText">
              I'M
              <span className="introName">BHAVYA ANAND</span>
            </span>
          </span>
          <span className="post">Website Developer</span>
          <p className="introPara">
            I am a skilled Web Developer experienced in creating visually
            appealing and user friendly websites.
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={65}
            duration={600}
          >
            <button className="introBtn">PROJECTS</button>
          </Link>
        </div>
      </section>
      <div className="scroll">
        <BsMouse className="scrollBtn"></BsMouse>
      </div>
    </>
  );
};

export default Intro;
