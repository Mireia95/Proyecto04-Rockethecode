import { printAboutMe } from '../Components/AboutMe/AboutMe';
import { printEducation } from '../Components/Education/Education';
import { printExperience } from '../Components/Experience/Experience';
import { printNavAll } from '../Components/Header/NavMobileAll';

import { createContactMe } from '../Components/Main/ContactMe';
import { printProjects } from '../Components/Projects/Projects';

import { printSkills } from '../Components/Skills/Skills';

//objeto con las opciones que da el menu. Cada clave llama a una funcion que pinta dicha seccion
export const options = {
  AboutMe: printAboutMe,
  Projects: printProjects,
  Education: printEducation,
  Experience: printExperience,
  Skills: printSkills
};

export const optionsMobile = {
  Home: createContactMe,
  About: printAboutMe,
  Projects: printProjects,
  Menu: printNavAll
};
