import { printAboutMe } from '../Pages/AboutMe/AboutMe';
import { printEducation } from '../Pages/Education/Education';
import { printExperience } from '../Pages/Experience/Experience';
import { printNavAll } from '../Components/Header/NavMobileAll';

import { createContactMe } from '../Components/Main/ContactMe';
import { printProjects } from '../Pages/Projects/Projects';

import { printSkills } from '../Pages/Skills/Skills';

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
