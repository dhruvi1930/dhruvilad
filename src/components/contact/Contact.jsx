import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import logo from "../../assets/Dhruvi_Logo.png";
import "./style.css";

function Contact() {
  const contactRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      alert("Please enter both an email and message.");
      return;
    }

    const serviceID = "service_8n4g24m";
    const templateID = "template_9g9vz5a";
    const userID = "DdRQWQPJIcdZMAhTl";

    emailjs
      .send(serviceID, templateID, { from_email: email, message }, userID)
      .then(() => {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div ref={contactRef} className="container">
      <div className="horizontalDivider" />
      <div className="contact">
        <div className="brandContainer">
          <img className="logoFooter" src={logo} alt="Dhruvi Lad" />
          <div className="titleContainer">
            <h1>Dhruvi</h1>
            <h1>Lad</h1>
          </div>
        </div>
        <div className="verticalDivider" />
        <div className="contactContainer">
          <h3>Stay Connected With Me</h3>
          <form className="formContainer" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button className="sendButton" type="submit">
              <FontAwesomeIcon icon={faLocationArrow} />
            </button>
          </form>
          <div className="socialMediaContainer">
            <a
              href="https://github.com/dhruvi1930"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvi-lad-b645771a2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a
              href="https://www.behance.net/dhruvilad2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faBehance} />
            </a>
            <a href="mailto:dhruvihl369@gmail.com">
              <FontAwesomeIcon className="icon" icon={faAt} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
