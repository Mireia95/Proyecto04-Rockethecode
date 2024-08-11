import { printMenu } from '../Main/Menu';
import { cleanElement } from './CleanElement';
import './ButtonBackHome.css';

export const createButtonBack = (section) => {
  const main = document.querySelector('main');
  const backHome = document.createElement('button');
  backHome.classList.add('backHome');
  const backHomeIcon = document.createElement('img');
  backHomeIcon.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1723400573/ROCKTHECODE/iconos/backarrowPinkDark.png';
  backHomeIcon.alt = 'back to home';
  backHome.appendChild(backHomeIcon);

  backHome.addEventListener('click', () => {
    section.classList.add('animOut');
    cleanElement(section, main);
    setTimeout(() => {
      printMenu();
    }, 500);
  });
  return backHome;
};
