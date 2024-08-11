//header total
import './Header.css';
import { createSelectLang } from './Languages.js';
import { createLogo } from './Logo.js';
import { createNav } from './Nav.js';
import { createPalette } from './Palette.js';

export const printHeader = () => {
  const header = document.createElement('header');
  const divLeft = document.createElement('div');
  const logo = createLogo();
  //!const nav = createNav();
  const palette = createPalette();
  const selectLang = createSelectLang();

  header.id = 'header';

  divLeft.appendChild(logo);
  //! divLeft.appendChild(nav);
  divLeft.appendChild(palette);

  header.appendChild(divLeft);
  header.appendChild(selectLang);
  document.body.appendChild(header);
};
