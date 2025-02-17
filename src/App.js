import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import NavBar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
