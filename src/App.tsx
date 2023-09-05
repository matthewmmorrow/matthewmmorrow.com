import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IconButton, Menu, MenuHandler, MenuItem, MenuList, Tooltip } from '@material-tailwind/react'
import { MyResume } from './models';
import { SkillCard } from './components/SkillCard'
import { ExperienceCard } from './components/ExperienceCard';
import { EducationCard } from './components/EducationCard';
import { Bars3Icon, EnvelopeOpenIcon, PhoneIcon } from '@heroicons/react/24/solid';

function openAppMenu() {

}

function scrollElement(name:string) {

}

function App() {
  const resume = MyResume;

  const menuList = (
    <MenuList>
      <MenuItem><button md-menu-item onClick={() => scrollElement('skills')}> Skills </button></MenuItem>
      <MenuItem><button md-menu-item onClick={() => scrollElement('experience')}> Experience </button></MenuItem>
      <MenuItem><button md-menu-item onClick={() => scrollElement('education')}> Education </button></MenuItem>
      <MenuItem><button md-menu-item onClick={() => scrollElement('portfolio')}> Portfolio </button></MenuItem>
    </MenuList>
  )
  const contactIcons = (
    <>
      <a href="mailto:matt@matthewmmorrow.com"><EnvelopeOpenIcon className="h-6 w-6 inline" /></a>
      <a href="http://linkedin.com/in/matthewmmorrow" className="inline"><img className="h-6 w-6 m-0 invert inline" src='images/linkedin.png' /></a>
      <Tooltip content="518-881-7181">
        <PhoneIcon className="h-6 w-6 prose-gray inline" />
      </Tooltip>
    </>
  )

  const year = new Date().getFullYear();
  const yearsOfExperience = year - resume.professionalStartYear;
  const yearsRemote = year - resume.remoteStartYear;

  return (
    <>
    <div className="fixed top-4 left-4 border border-white rounded">
      <Menu>
        <MenuHandler>
          <Bars3Icon className='h-6 w-6 text-white' />
        </MenuHandler>
        {menuList}
      </Menu>
    </div>
    <div id="background" className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center prose h-full w-full invert">
        <h2 className="italic">You've Found</h2>
        <h1>Matthew M Morrow</h1>
        <h2 className="italic">Developer Extraordinaire</h2>
        <h3 className="italic">{yearsOfExperience}+ Years of Experience</h3>
        <h3 className="italic">{yearsRemote}+ Years Remote</h3>
        <span>Contact Me</span>
        <div className='flex-1'>
          {contactIcons}
        </div>
      </div>
    </div>
    <nav className="bg-deep-orange-500 sticky flex p-4 top-0 z-50">
      <div className="flex-1">
        <div id="headerMenu" className="top-4 left-4 border border-white rounded w-min text-left">
          <Menu>
            <MenuHandler>
              <Bars3Icon className='h-6 w-6 text-white' />
            </MenuHandler>
            {menuList}
          </Menu>
        </div>
      </div>
      <div className="flex-auto invert prose text-center">
        <h2 id="headerName">Matthew M Morrow</h2>
      </div>
      <div id="headerContact" className='flex-1 invert text-right'>
        {contactIcons}
      </div>
    </nav>
    <div id="personal-statement" className="prose max-w-none p-4">
      <p>My drive is to satisfy my passion for technology by learning new skills and applying them to fascinating problems. Finding solutions outside of the box or tracking that elusive bug make each day a rewarding puzzle.</p>
      <p>I've been fully remote for over 10 years. It takes dedication and habit to maintain great teamwork and a great work-life balance but I wouldn't change it at all.</p>
    </div>
    <div id="content" className='prose max-w-none p-2'>
      <h2 id="skills">Skills</h2>
      <div className="flex flex-row flex-wrap">
        {resume.skills.map(skill => { return (SkillCard({skill}))})}
      </div>
      <h2 id="experience">Experience</h2>
      <div className="sm:grid-cols-2 lg:grid-cols-3 grid gap-2">
        {resume.experiences.map(experience => { return (ExperienceCard({experience}))})}
      </div>
      <h2 id="education">Education</h2>
      <div className="sm:grid-cols-2 lg:grid-cols-3 grid gap-2">
        {resume.education.map(education => { return (EducationCard({education}))})}
      </div>
    </div>
    <div id="bottom-bar" className="p-2 text-center bg-deep-orange-400" >
      <h2 className="invert">Hey, you've read this far, you should contact me.</h2>
      <div className='flex-1 invert'>
        {contactIcons}
      </div>
    </div>
    </>
  );
}

export default App;
