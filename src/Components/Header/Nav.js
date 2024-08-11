import './Nav.css';
import { navOptions } from '../../Data/Data'; //imoprt options of nav

export const createNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (const option of navOptions) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '';
    a.innerText = option.name;
    a.addEventListener('click', (e) => {
      console.log(option.name);
    });
    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  return nav;
};
