import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import NavBar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
