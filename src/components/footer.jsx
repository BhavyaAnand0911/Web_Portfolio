import React from "react";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import "../styles/footer.scss";
import github from "../assets/github.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import leet from "../assets/leetcode.png";

const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContent">
          <div className="left">
            <span className="footerName">BHAVYA ANAND</span>
            <p className="footertext">
              A web developer with a frontend concentration creates the frontend
              of websites and web applications, which promotes the success of
              the final result.
            </p>
          </div>
          <div className="right">
            <span className="socials">SOCIALS</span>
            <div className="links">
              <SocialIcon
                url="https://www.instagram.com/_bhavya__anand_/"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://leetcode.com/BhavyaAnand0911/"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://github.com/BhavyaAnand0911"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/bhavya-anand0911/"
                bgColor="black"
                fgColor="white"
              />
            </div>
          </div>
        </div>
        <div className="copyright">© Copyright 2023. Made by Bhavya Anand</div>
      </div>
    </>
  );
};

export default footer;
