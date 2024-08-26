import './Main.css';
import './MainResponsive.css';
import { createContactMe } from './ContactMe.js';

export const printMain = () => {
  const main = document.createElement('main');
  const sectionContactMe = createContactMe();
  main.appendChild(sectionContactMe);
  document.body.appendChild(main);
};
