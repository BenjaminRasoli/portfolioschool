import { navLinks } from "../constants";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import cv from "../assets/CV.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [color, setColor] = useState("white");
  const [githubColor, setGithubColor] = useState("white");

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="flex justify-between w-full items-center p-8 top-0 sticky bg-Main h-20 text-White">
      <span>Benjamin | Rasoli</span>

      <div
        className={`${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } fixed top-0 left-0 bg-Main w-full h-screen transition-all duration-300 z-40`}
      >
        <ul className="list-none flex flex-col pt-10 items-center h-full space-y-6">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="text-xl">
              <a
                href={`${navLink.id === "CV" ? cv : "#" + navLink.id}`}
                download={navLink.id === "CV" && cv}
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                {navLink.title}
              </a>
            </li>
          ))}

          <div className="flex gap-x-6 text-xl mt-6">
            <a href="https://github.com/BenjaminRasoli" target="_blank">
              <FaGithub
                style={{ color: githubColor }}
                onMouseEnter={() => setGithubColor("#26446b")}
                onMouseLeave={() => setGithubColor("white")}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300"
              target="_blank"
            >
              <FaLinkedin
                style={{ color: color }}
                onMouseEnter={() => setColor("#0A66C2")}
                onMouseLeave={() => setColor("white")}
              />
            </a>
          </div>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-x-4">
        {navLinks.map((navLink) => (
          <ul className="list-none" key={navLink.id}>
            <li className="hover:underline">
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
          <a href="https://github.com/BenjaminRasoli" target="_blank">
            <FaGithub
              style={{ color: githubColor }}
              onMouseEnter={() => setGithubColor("#26446b")}
              onMouseLeave={() => setGithubColor("white")}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300"
            target="_blank"
          >
            <FaLinkedin
              style={{ color: color }}
              onMouseEnter={() => setColor("#0A66C2")}
              onMouseLeave={() => setColor("white")}
            />
          </a>
        </div>
      </div>

      <div className="md:hidden block z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
