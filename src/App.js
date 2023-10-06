import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </>
  );
}

export default App;
