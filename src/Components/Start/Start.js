import { createLogoWhite } from '../Header/Logo';
import './Start.css';

export const printStart = () => {
  const divBG = document.createElement('div');
  const logo = createLogoWhite();

  const lineup = document.createElement('div');
  const linedown = document.createElement('div');

  divBG.appendChild(lineup);
  divBG.appendChild(logo);
  divBG.appendChild(linedown);

  document.body.appendChild(divBG);
  divBG.classList.add('start');

  setTimeout(() => {
    document.body.removeChild(divBG);
  }, 2000);
};
