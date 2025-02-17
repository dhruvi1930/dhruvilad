import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faPalette,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import QuickCasa from "../../assets/quickcasa_logo.jpeg";
import NorthernDevs from "../../assets/northerndevs_logo.png";

function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div ref={experienceRef} className="experience">
      <h2>Where I&apos;ve Worked</h2>
      <div className="innerExperience">
        <div className="experienceCard">
          <div className="logoContainer">
            <img
              src={QuickCasa}
              className="companyLogo"
              alt="Quick Casa Logo"
            />
          </div>
          <h3>Full Stack Developer</h3>
          <p>Aug 2023 - Apr 2024</p>
          <p className="companyName">Quick Casa</p>
          <ul>
            <li>
              Built a real estate admin portal with React.js, Node.js, and
              Figma, improving property management efficiency.
            </li>
            <li>
              Developed responsive UI components, reducing page load times by
              25%.
            </li>
            <li>
              Enhanced test coverage with Jest, improving application
              reliability by 30%.
            </li>
          </ul>
          <div className="skills">
            <FontAwesomeIcon icon={faCode} className="skillIcon" />
            <FontAwesomeIcon icon={faDatabase} className="skillIcon" />
            <FontAwesomeIcon icon={faPalette} className="skillIcon" />
          </div>
        </div>
        <div className="experienceCard">
          <div className="logoContainer">
            <img
              src={NorthernDevs}
              className="companyLogo"
              alt="Northern Devs Logo"
            />
          </div>
          <h3>Full Stack Developer</h3>
          <p>Jan 2023 - Apr 2024</p>
          <p className="companyName">Northern Devs</p>
          <ul>
            <li>
              Developed an e-commerce admin portal with 15+ reusable components,
              cutting dev time by 50%.
            </li>
            <li>
              Designed a business dashboard in React.js & Node.js, reducing
              manual data processing by 40%.
            </li>
            <li>
              Integrated Stripe payments and optimized order management,
              boosting transaction speed by 20%.
            </li>
            <li>
              Built SEO-optimized websites using Webflow, WordPress, and
              Elementor Pro.
            </li>
          </ul>
          <div className="skills">
            <FontAwesomeIcon icon={faCode} className="skillIcon" />
            <FontAwesomeIcon icon={faDatabase} className="skillIcon" />
            <FontAwesomeIcon icon={faBolt} className="skillIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
