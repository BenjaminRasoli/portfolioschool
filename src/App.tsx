import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import "./index.css";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Technologies />
      <Projects />
    </>
  );
}

export default App;
