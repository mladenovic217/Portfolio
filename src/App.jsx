import "./App.scss";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

import ScrollProgress from "./components/ScrollProgress";
import useScrollAnimation from "./hooks/useScrollAnimation";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  useScrollAnimation();
  return (
    <>
      <ScrollProgress />
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <AboutMe />
      <ContactMe/>
    </>
  );
}
export default App;
