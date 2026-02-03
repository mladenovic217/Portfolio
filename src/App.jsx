import "./App.scss";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

import Scroll from "./components/Scroll";
import useScrollReveal from "./hooks/useScrollReveal";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  useScrollReveal();
  return (
    <>
      <Scroll />
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <AboutMe />
      <ContactMe/>
    </>
  );
}
export default App;
