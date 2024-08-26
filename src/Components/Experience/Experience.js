import { experience } from '../../Data/DataExperience';
import { createButtonBack } from '../Utils/ButtonBackHome';
import { createDescript } from '../Utils/CreateDescript';
import { createTitleSection } from '../Utils/TitleSection';
import './Experience.css';
import './ExperienceResponsive.css';

export const printExperience = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Experience', 'Where I worked', section);
  section.id = 'experience';

  const divSection = document.createElement('div');
  const article = document.createElement('article');
  const divCompanies = document.createElement('div');
  divCompanies.classList.add('company');

  const divDescript = document.createElement('div');
  divDescript.classList.add('description');

  for (let i = 0; i < experience.length; i++) {
    const work = experience[i];
    const button = document.createElement('button');
    button.innerText = work.company;
    divCompanies.appendChild(button);
    if (i === 0) {
      button.classList.add('companySelected');
      createDescript(work.role, work.date, work.description, divDescript);
    }
    button.addEventListener('click', (e) => {
      //remove class "companySelected" from all buttons
      const buttonsAll = divCompanies.querySelectorAll('button');
      buttonsAll.forEach((butt) => butt.classList.remove('companySelected'));

      //add class "companySelected" only in this button clicked
      button.classList.add('companySelected');

      createDescript(work.role, work.date, work.description, divDescript);
    });
  }

  const backHome = createButtonBack(section);

  article.appendChild(divCompanies);
  article.appendChild(divDescript);
  divSection.appendChild(article);
  section.appendChild(divSection);
  section.appendChild(backHome);
  main.appendChild(section);
};
