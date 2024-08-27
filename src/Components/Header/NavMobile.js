import { navOptionsMobile } from '../../Data/Data';
import { cleanElementNoDelay } from '../Utils/CleanElement';

import './NavMobile.css';

import { printMain } from '../Main/Main';
import { printAboutMe } from '../AboutMe/AboutMe';
import { createContactMe } from '../Main/ContactMe';
import { printProjects } from '../Projects/Projects';
import { printNavAll } from './NavMobileAll';
import { printMenuOptions } from '../Utils/PrintMenuOptions';

export const createNavMobile = () => {
  const divMenu = document.createElement('div');
  divMenu.classList.add('menuMobile');

  for (const option of navOptionsMobile) {
    const button = document.createElement('button');
    button.innerHTML = `<img src=${option.img} alt=${option.name}> </img> ${option.name}`;

    button.addEventListener('click', () => {
      const main = document.querySelector('main');
      main.innerHTML = '';
      if (option.name === 'Home') {
        const navAll = document.querySelector(".navAll");
        if(navAll){
          
        }
        const contact = createContactMe();
        contact.classList.add('animIn');
        main.appendChild(contact);
      } else if (option.name === 'About') {
        printAboutMe();
      } else if (option.name === 'Projects') {
        printProjects();
      } else if (option.name === 'Menu') {
        printNavAll();

      }
    });
    divMenu.appendChild(button);
  }
  return divMenu;
};
