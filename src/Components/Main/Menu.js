import { navOptions } from '../../Data/Data';
import { printAboutMe } from '../AboutMe/AboutMe';
import { printEducation } from '../Education/Education';
import { printExperience } from '../Experience/Experience';
import { printProjects } from '../Projects/Projects';
import { printSkills } from '../Skills/Skills';
import { cleanElement } from '../Utils/CleanElement';

import '../Utils/AnimInOut.css';

import './Menu.css';

export const printMenu = () => {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.classList.add('menu');
  div.classList.add('animIn');
  for (const option of navOptions) {
    const button = document.createElement('button');

    button.innerHTML = `<img src=${option.img} alt=${option.name}> </img> <h3> ${option.name} </h3>`;

    if (option.name === 'About Me') {
      button.classList.add('aboutMe');
    }

    button.addEventListener('click', () => {
      cleanElement(div, main);
      div.classList.add('animOut');
      if (option.name === 'About Me') {
        setTimeout(() => {
          printAboutMe();
        }, 500);
      } else if (option.name === 'Projects') {
        setTimeout(() => {
          printProjects();
        }, 500);
      } else if (option.name === 'Education') {
        setTimeout(() => {
          printEducation();
        }, 500);
      } else if (option.name === 'Experience') {
        setTimeout(() => {
          printExperience();
        }, 500);
      } else if (option.name === 'Skills') {
        setTimeout(() => {
          printSkills();
        }, 500);
      }
    });

    div.appendChild(button);
  }
  main.appendChild(div);
};
