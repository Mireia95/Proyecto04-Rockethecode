import { navOptionsMobile } from '../../Data/Data';
import { cleanElementNoDelay } from '../Utils/CleanElement';

import './NavMobile.css';

import { printMain } from '../Main/Main';

import { createContactMe } from '../Main/ContactMe';

import { printMenuOptions } from '../Utils/PrintMenuOptions';
import { printAboutMe } from '../../Pages/AboutMe/AboutMe';
import { printProjects } from '../../Pages/Projects/Projects';
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
      //y le asigno la clase active para el cambio de BGColor
      const buttons = document.querySelectorAll('.menuMobile > button');
      console.log(buttons);
      for (const button of buttons) {
        button.classList.remove('active');
      }

      button.classList.add('active');
    });
    divMenu.appendChild(button);
  }
  return divMenu;
};
