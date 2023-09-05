import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skill } from "./Skill";

export type Resume = {
  name: string,
  tagline: string,
  email: string,
  phone: string,
  linkedin: string,
  personalStatements: string[],
  skills: Skill[];
  education: Education[];
  experiences: Experience[];
  professionalStartYear: number;
  remoteStartYear: number;
};

export const MyResume: Resume = {
  name: "Matthew M Morrow",
  tagline: "Developer Extraordinaire",
  email: "matt@matthewmmorrow.com",
  phone: "518-881-7181",
  linkedin: "http://linkedin.com/in/matthewmmorrow",
  personalStatements: [
    "My drive is to satisfy my passion for technology by learning new " +
    "skills and applying them to fascinating problems. Finding solutions " +
    "outside of the box or tracking that elusive bug make each day a " +
    "rewarding puzzle.",
    "I've been fully remote for the majority of my career. It takes dedication and " +
    "habit to maintain great teamwork and a great work-life balance but I " +
    "wouldn't change it at all.",
  ],
  skills: [
    { name: "C#", years: 20, image: "images/csharp.png" },
    { name: "SQL", years: 20, image: "images/sql.png" },
    { name: "JavaScript", years: 20, image: "images/javascript.png" },
    { name: "TypeScript", years: 10, image: "images/typescript.png" },
    { name: "AWS Cloud", years: 2, image: "images/aws.png" },
    { name: "NodeJS", years: 8, image: "images/nodejs.jpg" },
    { name: "ReactJS", years: 8, image: "images/reactjs.png" },
    { name: "Java", years: 4, image: "images/java.png" },
    { name: "Python", years: 2, image: "images/python.png" },
    { name: "Angular", years: 2, image: "images/angularjs.png" },
    { name: "Mobile", years: 2, image: "images/mobile.png" },
    { name: "Microservices", years: 9, image: "images/microservices.png" },
    /*{name: "MVC", years: 15, image: "images/mvc.jpg"},*/
  ],
  experiences: [
    {
      name: "Paylocity",
      title: "Software Engineer & Dev Lead",
      years: "2014 to Present",
      description: "",
      image: "images/paylocity.png",
    },
    {
      name: "Ecteon",
      title: "Web Developer",
      years: "2012 to 2016",
      description: "",
      image: "images/ecteon.png",
    },
    {
      name: "Sumpto",
      title: "Contractor",
      years: "2014 to 2015",
      description: "",
      image: "images/sumpto.png",
    },
    {
      name: "CoreStream",
      title: "Contractor",
      years: "2011 to 2014",
      description: "",
      image: "images/corestream.png",
    },
    {
      name: "Ayco",
      title: "Web Developer",
      years: "2009 to 2012",
      description: "",
      image: "images/ayco.jpg",
    },
    {
      name: "Advanced Management Systems",
      title: "Developer",
      years: "2009",
      description: "",
      image: "images/ams.png",
    },
    {
      name: "Intel",
      title: "Technical Intern",
      years: "2008",
      description: "",
      image: "images/intel.png",
    },
  ],

  education: [
    {
      name: "Rensselaer Polytechnic Institute",
      title: "Master of Science - Information Technology",
      years: "2009",
      description: "",
      image: "images/rpi.png",
    },
    {
      name: "Rensselaer Polytechnic Institute",
      title: "Bachelor of Science - Computer Science & Psychology",
      years: "2009",
      description: "",
      image: "images/rpi.png",
    },
  ],
  professionalStartYear: 2008,
  remoteStartYear: 2012,
};
