//header total

import { createLogo } from './Logo.js';
import { createNav } from './Nav.js';

//*creare il Nav ->
//*creare array con le opzioni
//*creare una lista
/* <nav> 
        <ul>
            <li> <a>  */

export const printHeader = () => {
  const header = document.createElement('header');
  const logo = createLogo();
  const nav = createNav();
  /*  const palette = createPalette();
  const languages = createLanguages(); */
  //header.appendChild(logo);
  //? header.appendchild(nav);
  //? header.appendchild(palette);
  //? header.appendchild(languages);
  document.body.appendChild(header);
  console.log('header printato');
};
