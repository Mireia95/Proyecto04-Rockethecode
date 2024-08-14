import { experience } from '../../Data/Data';
import { createButtonBack } from '../Utils/ButtonBackHome';
import { createTitleSection } from '../Utils/TitleSection';
import './Experience.css';

export const printExperience = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Experience', 'Where I worked', section);
  section.id = 'experience';

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
      createDescriptWork(work, divDescript);
    }
    button.addEventListener('click', (e) => {
      //remove class "companySelected" from all buttons
      const buttonsAll = divCompanies.querySelectorAll('button');
      buttonsAll.forEach((butt) => butt.classList.remove('companySelected'));

      //add class "companySelected" only in this button clicked
      button.classList.add('companySelected');

      createDescriptWork(work, divDescript);

      //?
    });
  }

  const backHome = createButtonBack(section);

  article.appendChild(divCompanies);
  article.appendChild(divDescript);
  section.appendChild(article);
  section.appendChild(backHome);
  main.appendChild(section);
};

const createDescriptWork = (work, divDescript) => {
  divDescript.innerText = '';
  const h4 = document.createElement('h4');
  h4.innerText = work.role;
  const pDate = document.createElement('p');
  pDate.innerText = work.date;
  const descript = document.createElement('p');
  descript.innerHTML = work.description;

  divDescript.appendChild(h4);
  divDescript.appendChild(pDate);
  divDescript.appendChild(descript);
};
