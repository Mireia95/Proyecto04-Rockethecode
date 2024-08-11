import './Main.css';
import { createContactMe } from './ContactMe.js';

export const printMain = () => {
  const main = document.createElement('main');
  const sectionContactMe = createContactMe();
  //? const sectionMenu = createMenu();
  main.appendChild(sectionContactMe);
  document.body.appendChild(main);
};
