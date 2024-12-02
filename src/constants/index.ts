interface NavLinks {
  id: string;
  title: string;
}

export const navLinks: NavLinks[] = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },

  {
    id: "work",
    title: "Work & Education",
  },

  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "CV",
    title: "Download CV",
  },
];

interface Technologies {
  id: string;
  title: string;
  logo: string;
  category: string;
  officialWebsite: string;
  releaseDate: string;
}
// @ts-ignore
import { html5, css3, jss, dotnet, react, git } from "react-3d-icons";

export const technologies: Technologies[] = [
  {
    id: "1",
    title: "HTML",
    logo: html5,
    category: "Frontend",
    officialWebsite: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    releaseDate: "1991-06-01",
  },
  {
    id: "2",
    title: "CSS",
    logo: css3,
    category: "Frontend",
    officialWebsite: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    releaseDate: "1996-12-17",
  },
  {
    id: "3",
    title: "JavaScript",
    logo: jss,
    category: "Frontend",
    officialWebsite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    releaseDate: "1995-12-04",
  },
  {
    id: "4",
    title: "C#",
    logo: dotnet,
    category: "Backend",
    officialWebsite: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    releaseDate: "2000-01-01",
  },
  {
    id: "5",
    title: "React",
    logo: react,
    category: "Frontend",
    officialWebsite: "https://reactjs.org/",
    releaseDate: "2013-03-29",
  },
  {
    id: "6",
    title: "Git",
    logo: git,
    category: "Version Control",
    officialWebsite: "https://git-scm.com/",
    releaseDate: "2005-04-07",
  },
];
