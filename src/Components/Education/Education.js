import { createButtonBack } from '../Utils/ButtonBackHome';
import { createTitleSection } from '../Utils/TitleSection';
import './Education.css';

export const printEducation = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Education', 'Where I studied', section);
  section.id = 'Education';
  const backHome = createButtonBack(section);

  section.appendChild(backHome);
  main.appendChild(section);
};
