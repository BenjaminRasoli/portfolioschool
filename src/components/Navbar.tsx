import { navLinks } from "../constants";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import cv from "../assets/CV.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [isOpen]);

  if (isOpen) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "auto";
  }

  return (
    <nav
      className={`flex justify-between w-full items-center p-8 top-0 sticky h-20 ${
        scrolled ? "bg-Main text-White" : "bg-transparent text-Black"
      } transition-all duration-300`}
      style={{
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <h3 className={`text-h3 ${scrolled ? "text-White" : "text-Black"}`}>
        Benjamin | Rasoli
      </h3>
      <div
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } fixed top-0 left-0 bg-Main w-full h-screen transition-all duration-300 z-40`}
      >
        <ul className="list-none flex flex-col pt-10 items-center h-full text-White space-y-6">
          {navLinks.map((navLink) => (
            <h3
              key={navLink.id}
              className={`text-h3 ${scrolled ? "text-White" : "text-Black"}`}
            >
              <a
                href={`${navLink.id === "CV" ? cv : "#" + navLink.id}`}
                download={navLink.id === "CV" && cv}
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                {navLink.title}
              </a>
            </h3>
          ))}

          <div className="flex gap-x-6 text-xl mt-6">
            <a
              href="https://github.com/BenjaminRasoli"
              target="_blank"
              className={`${scrolled ? "text-White" : "text-Black"}`}
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300"
              target="_blank"
              className={`${scrolled ? "text-White" : "text-Black"}`}
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-x-4">
        {navLinks.map((navLink) => (
          <ul className="list-none" key={navLink.id}>
            <li className="hover:underline text-h3">
              <a
                href={`${navLink.id === "CV" ? cv : "#" + navLink.id}`}
                download={navLink.id === "CV" && cv}
                className="hover:underline"
              >
                {navLink.title}
              </a>
            </li>
          </ul>
        ))}

        <div className="flex gap-x-6 text-xl">
          <a
            href="https://github.com/BenjaminRasoli"
            target="_blank"
            className={`${scrolled ? "text-White" : "text-Black"}`}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300"
            target="_blank"
            className={`${scrolled ? "text-White" : "text-Black"}`}
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:hidden block z-50">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? "White" : scrolled ? "White" : "Black"}
        />
      </div>
    </nav>
  );
}

export default Navbar;
