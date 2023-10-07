import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.scss";
import img from "../assets/logo.png";
import contactImg from "../assets/contact.png";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  });

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#36454f" }}>
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-1000}
          duration={500}
          className="navLogo"
        >
          <img className="navlogo" src={img} alt="Logo" />
          <span className="navName" onClick={() => window.location.reload()}>
            BHAVYA ANAND
          </span>
        </Link>
        <div className="navMenu">
          <Link
            className="navMenuList"
            style={{ color: "#da38da", borderBottom: "3px solid #da38da" }}
          >
            HOME
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={65}
            duration={600}
            className="navMenuList"
          >
            PROJECTS
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={65}
            duration={600}
            className="navMenuList"
          >
            ABOUT
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={65}
            duration={600}
            className="navMenuList"
          >
            CONTACT
          </Link>
        </div>
        <div class="mobile-menu-button">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <div class="mobile-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
