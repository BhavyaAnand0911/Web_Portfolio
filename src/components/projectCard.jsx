import React from "react";
import "../styles/projectCard.scss";
import laptop from "../assets/laptop.png";
import { Link } from "react-scroll";

const projectCard = ({ name, text, link }) => {
  return (
    <>
      <div className="card">
        <div className="laptop">
          <img src={laptop} alt="" className="laptopImg" />
        </div>
        <div className="text">
          <p className="heading">{name}</p>
          {text}
          <br />
          <a href={link} target="_blank">
            <button className="projectBtn">CASE STUDY</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default projectCard;
