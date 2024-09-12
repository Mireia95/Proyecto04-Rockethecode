import { navOptionsMobile } from '../../Data/Data';
import { cleanElementNoDelay } from '../Utils/CleanElement';

import './NavMobile.css';

import { printMain } from '../Main/Main';

import { createContactMe } from '../Main/ContactMe';

import { printMenuOptions } from '../Utils/PrintMenuOptions';
import { printAboutMe } from '../AboutMe/AboutMe';
import { printProjects } from '../Projects/Projects';
import { optionsMobile } from '../../Data/Options';

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
        const contact = createContactMe();
        contact.classList.add('animIn');
        main.appendChild(contact);
      }
      //por cada boton pulsado ejecuto su funcion, que está guardada en el array optionsMobile
      optionsMobile[option.name]();
      /*   por ejemplo el primer caso seria: 
       optionsMobile[Home] : su valor es la funcion createContactMe() */
    });
    divMenu.appendChild(button);
  }
  return divMenu;
};
