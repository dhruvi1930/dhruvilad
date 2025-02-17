/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import logo from "../../assets/Dhruvi_Logo.png";
import "./style.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        alt="DL"
        className="logo"
        onClick={() => handleScroll("home")}
      />
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menubar ${isMenuOpen ? "show" : ""}`}>
        <nav>
          <a onClick={() => handleScroll("home")}>
            Home<span></span>
          </a>
          <a onClick={() => handleScroll("about")}>
            About<span></span>
          </a>
          <a onClick={() => handleScroll("experience")}>
            Experience<span></span>
          </a>
          <a onClick={() => handleScroll("projects")}>
            Projects<span></span>
          </a>
          <a onClick={() => handleScroll("contact")}>
            Contact<span></span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
