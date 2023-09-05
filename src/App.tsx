import React from "react";
import "./App.css";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import { MyResume } from "./models";
import { SkillCard } from "./components/SkillCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { EducationCard } from "./components/EducationCard";
import {
  Bars3Icon,
  EnvelopeOpenIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

function scrollElement(id: string) {
  let element = document.getElementById(id);
  if (element) {
    window.scroll(0, element.offsetTop - 68);
  }
}

function App() {
  const resume = MyResume;

  const menu = (
    <Menu>
      <MenuHandler>
        <Bars3Icon className="h-6 w-6 text-white" />
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => scrollElement("background")}>
          Contact
        </MenuItem>
        <MenuItem onClick={() => scrollElement("skills")}>
          Skills
        </MenuItem>
        <MenuItem onClick={() => scrollElement("experience")}>
          Experience
        </MenuItem>
        <MenuItem onClick={() => scrollElement("education")}>
          Education
        </MenuItem>
      </MenuList>
    </Menu>
  );
  const contactIcons = (
    <>
      <a href={"mailto:" + resume.email}>
        <EnvelopeOpenIcon className="h-6 w-6 inline" />
      </a>
      <a href={resume.linkedin} className="inline">
        <img
          className="h-6 w-6 m-0 invert inline"
          alt="linkedin"
          src="images/linkedin.png"
        />
      </a>
      <Tooltip content={resume.phone}>
        <PhoneIcon className="h-6 w-6 prose-gray inline" />
      </Tooltip>
    </>
  );

  const year = new Date().getFullYear();
  const yearsOfExperience = year - resume.professionalStartYear;
  const yearsRemote = year - resume.remoteStartYear;

  return (
    <>
      <div className="fixed top-4 left-4 border border-white rounded">
        {menu}
      </div>
      <div
        id="background"
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center prose h-full w-full invert">
          <h2 className="italic">You've Found</h2>
          <h1>{resume.name}</h1>
          <h2 className="italic">{resume.tagline}</h2>
          <h3 className="italic">{yearsOfExperience}+ Years of Experience</h3>
          <h3 className="italic">{yearsRemote}+ Years Remote</h3>
          <span>Contact Me</span>
          <div className="flex-1">{contactIcons}</div>
        </div>
      </div>
      <nav className="bg-deep-orange-500 sticky flex p-4 top-0 z-50">
        <div className="flex-1">
          <div
            id="headerMenu"
            className="top-4 left-4 border border-white rounded w-min text-left"
          >
            {menu}
          </div>
        </div>
        <div className="flex-auto invert prose text-center">
          <h2 id="headerName">{resume.name}</h2>
        </div>
        <div id="headerContact" className="flex-1 invert text-right">
          {contactIcons}
        </div>
      </nav>
      <div id="personal-statement" className="prose max-w-none p-4">
        {resume.personalStatements.map((statement)=>{return <p>{statement}</p>})}
      </div>
      <div id="content" className="prose max-w-none p-2">
        <h2 id="skills">Skills</h2>
        <div className="flex flex-row flex-wrap">
          {resume.skills.map((skill) => {
            return SkillCard({ skill });
          })}
        </div>
        <h2 id="experience">Experience</h2>
        <div className="sm:grid-cols-2 lg:grid-cols-3 grid gap-2">
          {resume.experiences.map((experience) => {
            return ExperienceCard({ experience });
          })}
        </div>
        <h2 id="education">Education</h2>
        <div className="sm:grid-cols-2 lg:grid-cols-3 grid gap-2">
          {resume.education.map((education) => {
            return EducationCard({ education });
          })}
        </div>
      </div>
      <div id="bottom-bar" className="p-2 text-center bg-deep-orange-400">
        <h2 className="invert">
          Hey, you've read this far, you should contact me.
        </h2>
        <div className="flex-1 invert">{contactIcons}</div>
        <small className="invert">
          <a href="https://github.com/matthewmmorrow/matthewmmorrow.com" className="flex justify-center content-center italic my-2">
            <span>Made with TypeScript, ReactJS, and TailwindCSS</span>
            <img
              className="h-4 w-4 my-0 mx-1 invert inline"
              alt="github"
              src="images/github.png"
            />
          </a>
        </small>

      </div>
    </>
  );
}

export default App;
