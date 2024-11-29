import { navLinks } from "../constants";
import Hamburger from "hamburger-react";
import { useState } from "react";
import cv from "../assets/CV.pdf";

function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex justify-between  w-full items-center p-8 top-0 sticky bg-Main  h-20 text-White">
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
          </ul>
        </div>
        <div className="hidden md:flex gap-x-4">
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
        </div>
        <div className="md:hidden block z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
