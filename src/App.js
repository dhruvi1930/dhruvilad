import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import NavBar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
    </>
  );
}

export default App;
