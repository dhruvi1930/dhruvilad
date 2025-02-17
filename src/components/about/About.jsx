import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function About() {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className="about">
      <div className="header">
        <p>Get To Know More</p>
        <h2>ABOUT ME</h2>
      </div>
      <div className="details">
        <div className="background-image"></div>
        <div className="description">
          <div className="details-card">
            <div className="card">
              <FontAwesomeIcon icon={faBriefcase} size="xl" color="white" />
              <h3>Experience</h3>
              <p>2+ Years</p>
              <p>Full Stack Developer</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faPeopleGroup} size="xl" color="white" />
              <h3>Education</h3>
              <p>Bachelor&apos;s Of Technology</p>
              <p>Post Graduate Certificate</p>
            </div>
          </div>
          <p>
            I am a Front-End Developer and UI/UX Designer with expertise in
            React.js, TypeScript, and Firebase. Passionate about building
            intuitive and high-performance web applications, I focus on clean
            code and seamless user experiences. I also enjoy graphic design and
            animation, bringing creativity into digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
