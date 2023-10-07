import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
