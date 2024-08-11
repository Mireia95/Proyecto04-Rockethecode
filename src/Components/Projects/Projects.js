import { createButtonBack } from '../Utils/ButtonBackHome';
import { createTitleSection } from '../Utils/TitleSection';
import './Projects.css';

export const printProjects = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Projects', 'Some things I built', section);
  section.id = 'Projects';

  const backHome = createButtonBack(section);
  section.appendChild(backHome);
  main.appendChild(section);
};
