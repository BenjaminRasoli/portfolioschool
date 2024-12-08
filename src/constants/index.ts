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
    id: "testimonials",
    title: "Testimonials",
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
  color: string;
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
    color: "#ff5733",
  },
  {
    id: "2",
    title: "CSS",
    logo: css3,
    category: "Frontend",
    officialWebsite: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    releaseDate: "1996-12-17",
    color: "#264DE4",
  },
  {
    id: "3",
    title: "JavaScript",
    logo: jss,
    category: "Frontend",
    officialWebsite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    releaseDate: "1995-12-04",
    color: "#F0DB4F",
  },
  {
    id: "4",
    title: "C#",
    logo: dotnet,
    category: "Backend",
    officialWebsite: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    releaseDate: "2000-01-01",
    color: "#690081",
  },
  {
    id: "5",
    title: "React",
    logo: react,
    category: "Frontend",
    officialWebsite: "https://reactjs.org/",
    releaseDate: "2013-03-29",
    color: "#00d8ff",
  },
  {
    id: "6",
    title: "Git",
    logo: git,
    category: "Version Control",
    officialWebsite: "https://git-scm.com/",
    releaseDate: "2005-04-07",
    color: "#f05133",
  },
];

interface Testimonials {
  id: string;
  author: string;
  title: string;
  content: string;
  position: string;
  imgSrc: string;
}

export const testimonials: Testimonials[] = [
  {
    id: "1",
    author: "Jayme Petracci",
    title: "This is awesome!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni ea odio nobis mollitia blanditiis veritatis expedita commodi adipisci, aliquid omnis. Nemo aut perferendis maiores dignissimos, repellat cupiditate quam possimus?",
    position: "Software Engineer",
    imgSrc: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: "2",
    author: "Liuka Kivell",
    title: "The best tutorial!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni ea odio nobis mollitia blanditiis veritatis expedita commodi adipisci, aliquid omnis. Nemo aut perferendis maiores dignissimos, repellat cupiditate quam possimus?",
    position: "UI/UX Designer",
    imgSrc: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    id: "3",
    author: "Chrysler Grinikhinov",
    title: "Revenue increased by 50%",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni ea odio nobis mollitia blanditiis veritatis expedita commodi adipisci, aliquid omnis. Nemo aut perferendis maiores dignissimos, repellat cupiditate quam possimus?",
    position: "Marketing Specialist",
    imgSrc: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    id: "4",
    author: "Kessiah Cornbell",
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni ea odio nobis mollitia blanditiis veritatis expedita commodi adipisci, aliquid omnis. Nemo aut perferendis maiores dignissimos, repellat cupiditate quam possimus?",
    position: "Product Manager",
    imgSrc: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: "5",
    author: "Wash Pont",
    title: "The best overall service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni ea odio nobis mollitia blanditiis veritatis expedita commodi adipisci, aliquid omnis. Nemo aut perferendis maiores dignissimos, repellat cupiditate quam possimus?",
    position: "Sales Executive",
    imgSrc: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];
