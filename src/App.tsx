import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import "./index.css";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Technologies />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
