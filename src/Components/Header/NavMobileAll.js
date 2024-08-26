import { navOptions } from '../../Data/Data';
import { printMenuOptions } from '../Utils/PrintMenuOptions';

import './NavMobileAll.css';
import '../Utils/AnimInOut.css';

//*cuando haces click en Menu creas el menu con todas las opciones

export const printNavAll = () => {
  const main = document.querySelector('main');
  const div = document.createElement('div');
  div.classList.add('navAll');
  div.classList.add('animIn');
  const animOutClass = 'animOutNoTransl';
  for (const option of navOptions) {
    printMenuOptions(option, div, div, main, animOutClass);
  }
  main.appendChild(div);
};
