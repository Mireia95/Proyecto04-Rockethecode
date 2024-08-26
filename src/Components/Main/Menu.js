import { navOptions } from '../../Data/Data';
import { printAboutMe } from '../AboutMe/AboutMe';
import { printEducation } from '../Education/Education';
import { printExperience } from '../Experience/Experience';
import { printProjects } from '../Projects/Projects';
import { printSkills } from '../Skills/Skills';
import { cleanElement } from '../Utils/CleanElement';

import '../Utils/AnimInOut.css';

import './Menu.css';
import './MenuResponsive.css';
import { printMenuOptions } from '../Utils/PrintMenuOptions';

export const printMenu = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.id = 'menuSection';
  const div = document.createElement('div');
  div.classList.add('menu');
  div.classList.add('animIn');
  const animClass = 'animOut';
  for (const option of navOptions) {
    printMenuOptions(option, div, section, main, animClass);
  }

  section.appendChild(div);
  main.appendChild(section);
};
