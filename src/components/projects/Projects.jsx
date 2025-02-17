import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./style.css";
import businessAnalyticalDashboard from "../../assets/Business Analystical Dashboard.png";
import grandMehfil from "../../assets/grandMehfil.png";
import applicationTracker from "../../assets/applicationTracker.png";
import marryme from "../../assets/White Beige Simple Woman & Business Blog Banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";

function Projects() {
  const projectRef = useRef([]);

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

    projectRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      projectRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const projects = [
    {
      title: "Business Analytical Dashboard",
      description: [
        "Led a cross-functional team in developing an analytics dashboard using MERN stack and project management skills throughout the development lifecycle.",
        "Recognized as 'Best of Program' for innovative technology use and team performance, demonstrating effective stakeholder management and operational excellence in project delivery.",
      ],
      skills: [
        "React.js",
        "Typescript",
        "Node.js",
        "MYSQL",
        "JEST",
        "Source Tree",
        "Firebase",
        "Bit Bucket",
        "Webflow",
        "REST APIs",
      ],
      image: businessAnalyticalDashboard,
      figmaLink:
        "https://www.figma.com/design/F1t3BCpGlyDdVksOQhrQXI/Capstone-Presentation?node-id=0-1&t=FpTaE7PKyjBKbJZq-1",
    },
    {
      title: "Marry Me",
      description: [
        "An elegant e-commerce platform specializing in Indian wedding attire for women, men, couples, and families. Designed to offer a seamless shopping experience, the platform features:Wide Collection, User-Friendly Navigation, Secure Checkout, Responsive Design",
      ],
      skills: [
        "MERN",
        "Next.js",
        "Javascript",
        "Node.js",
        "MongoDB",
        "JEST",
        "Github",
        "Figma",
        "REST APIs",
        "Stripe",
        "Tailwind",
      ],
      image: marryme,
      gitHubLink: "https://github.com/dhruvi1930/marryMe",
      demoLink: "https://marry-me-liart.vercel.app/",
      figmaLink:
        "https://www.figma.com/design/YsD3w2M98jIU1V6mC4qDZK/Marry-Me?node-id=0-1&t=iweVjy5m0kuhCLGE-1",
    },
    {
      title: "Grand Mehfil",
      description: [
        "A premium restaurant and event management website designed to offer an immersive and elegant experience for customers. The platform features a rich, visually appealing interface with a dark-themed modern aesthetic. Key highlights include:Dynamic Menu Display, Event Planning Section, Engaging UI/UX",
      ],
      skills: ["Figma", "Canva", "UI", "UX"],
      image: grandMehfil,
      figmaLink:
        "https://www.figma.com/design/WWvD4wTUxXskyPmH0BYx2q/Grand-Mehfil?node-id=0-1&t=xTE5iU5A443gpWX7-1",
    },
    {
      title: "Application Tracker",
      description: [
        "A web-based tool designed to help job seekers efficiently manage their job applications. Users can track applications, organize job details, set reminders for follow-ups, and monitor application statuses. The intuitive UI enhances usability, making job hunting more structured and stress-free.",
      ],
      skills: ["React.js", "Typescript", "Node.js", "Firebase", "REST APIs"],
      image: applicationTracker,
      gitHubLink: "https://github.com/dhruvi1930/Application-Tracker",
      demoLink: "https://application-tracker-roan.vercel.app/",
      figmaLink:
        "https://www.figma.com/design/Z16UoaEbhevtz1fjbAXP6h/Application-Tracker?t=iweVjy5m0kuhCLGE-1",
    },
  ];

  return (
    <div className="container visible">
      <h2>Collection Of Work</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          ref={(el) => (projectRef.current[index] = el)}
          className={`project ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            className="projectImage"
            src={project.image}
            alt={project.title}
          />
          <div className="projectDescription">
            <h3>{project.title}</h3>
            <div className="skills">
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
            {project.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <div className="projectLinks">
              {project?.figmaLink && (
                <a
                  href={project?.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="icons" icon={faFigma} />
                </a>
              )}
              {project?.gitHubLink && (
                <a
                  href={project?.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="icons" icon={faGithub} />
                </a>
              )}
              {project?.demoLink && (
                <a
                  href={project?.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="icons" icon={faLaptopCode} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
