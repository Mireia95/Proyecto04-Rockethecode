//header total
import './Header.css';
import './HeaderResponsive.css';
import { createSelectLang } from './Languages.js';
import { createLogo } from './Logo.js';
import { createNavMobile } from './NavMobile.js';
import { createPalette } from './Palette.js';

export const printHeader = () => {
  const header = document.createElement('header');
  header.id = 'header';
  const divLeft = document.createElement('div');
  const logo = createLogo();
  //?const palette = createPalette(); //if you want to add another theme color
  const selectLang = createSelectLang();

  divLeft.appendChild(logo);
  //? divLeft.appendChild(palette);

  //nav mobile
  const navMobile = createNavMobile();

  header.appendChild(divLeft);
  header.appendChild(selectLang);
  header.appendChild(navMobile);
  document.body.appendChild(header);
};
