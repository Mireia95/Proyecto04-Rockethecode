import { printAboutMe } from '../AboutMe/AboutMe';
import { printEducation } from '../Education/Education';
import { printExperience } from '../Experience/Experience';
import { printProjects } from '../Projects/Projects';
import { printSkills } from '../Skills/Skills';
import { cleanElement } from './CleanElement';

//*esta funcion está usada tanto para el menú, como para el menú para iPad y mobile
export const printMenuOptions = (option, div, section, main, anim) => {
  const button = document.createElement('button');
  button.innerHTML = `<img src=${option.img} alt=${option.name}> </img> <h3> ${option.name} </h3>`;
  if (option.name === 'About Me') {
    button.classList.add('aboutMe');
  }
  button.addEventListener('click', () => {
    if (section !== null) {
      cleanElement(section, main);
    }
    div.classList.add(anim);
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
};
