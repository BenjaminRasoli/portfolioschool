import { navLinks } from "../constants";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import cv from "../assets/files/CV.pdf";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";

function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`p-5 ssm:p-container py-0 border-b z-10 flex justify-between w-full items-center top-0 sticky h-20 ${
        scrolled
          ? "bg-Main border-White  text-White"
          : "bg-transparent text-Black border-Main"
      } transition-all duration-300`}
    >
      <h4 className={`text-h4 ${scrolled ? "text-White" : "text-Black"}`}>
        Benjamin | Rasoli
      </h4>
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
              className={`${scrolled ? "text-White" : "text-Black"} `}
            >
              <GithubIcon className=" w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300"
              target="_blank"
              className={`${scrolled ? "text-White" : "text-Black"}`}
            >
              <LinkedinIcon className="w-7" />
            </a>
          </div>
        </ul>
      </div>
      <div className="hidden zl:flex items-center gap-x-4">
        {navLinks.map((navLink) => (
          <ul className="list-none" key={navLink.id}>
            <li className="hover:underline text-p">
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
            <GithubIcon className="hover:text-[#808080] w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300"
            target="_blank"
            className={`${scrolled ? "text-White" : "text-Black"}`}
          >
            <LinkedinIcon className="hover:text-[#0A66C2] w-6" />
          </a>
        </div>
      </div>
      <div className="zl:hidden block z-50">
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
