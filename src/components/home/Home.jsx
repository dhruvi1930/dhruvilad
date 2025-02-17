import "./style.css";
import logo from "../../assets/profile1.png";
import Resume from "../../assets/DHRUVI LAD.pdf";

function Home() {
  return (
    <div className="home">
      <div className="tagSection">
        <p>Hello !!! I&apos;m Dhruvi Lad</p>
        <h1>Crafting Solutions with Code, Design, and Creativity</h1>
        <div className="button-group">
          <a href="mailto:dhruvihl369@gmail.com" className="hireMe">
            Hire Me
          </a>
          <a
            target="_blank"
            href={Resume}
            className="resume"
            download="Dhruvi Lad"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="moon">
        <img src={logo} alt="DL Logo" className="logo" />
      </div>
    </div>
  );
}

export default Home;
