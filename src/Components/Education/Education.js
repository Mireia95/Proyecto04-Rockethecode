import { education } from '../../Data/DataEducation';
import { createButtonBack } from '../Utils/ButtonBackHome';
import { createDescript } from '../Utils/CreateDescript';
import { createTitleSection } from '../Utils/TitleSection';
import './Education.css';
import './EducationResponsive.css';

export const printEducation = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Education', 'Where I studied', section);
  section.id = 'education';

  const divSection = document.createElement('div');
  const article = document.createElement('article');
  const divSchools = document.createElement('div');
  divSchools.classList.add('school');

  const divDescript = document.createElement('div');
  divDescript.classList.add('descriptSchool');

  const divDate = document.createElement('div');
  divDate.classList.add('date');
  const date = document.createElement('p');

  for (let i = 0; i < education.length; i++) {
    const school = education[i];
    const button = document.createElement('button');
    button.innerText = school.school;
    divSchools.appendChild(button);
    if (i === 0) {
      button.classList.add('schoolSelected');
      createDescript(
        school.title,
        school.type,
        school.description,
        divDescript
      );
      date.innerText = school.date;
      divDate.appendChild(date);
      divDescript.appendChild(divDate);
    }
    button.addEventListener('click', (e) => {
      //remove class "companySelected" from all buttons
      const buttonsAll = divSchools.querySelectorAll('button');
      buttonsAll.forEach((butt) => butt.classList.remove('schoolSelected'));

      //add class "companySelected" only in this button clicked
      button.classList.add('schoolSelected');

      createDescript(
        school.title,
        school.type,
        school.description,
        divDescript
      );
      date.innerText = school.date;
      divDate.appendChild(date);
      divDescript.appendChild(divDate);
    });
  }
  const backHome = createButtonBack(section);
  article.appendChild(divSchools);
  article.appendChild(divDescript);
  divSection.appendChild(article);
  section.appendChild(divSection);
  section.appendChild(backHome);
  main.appendChild(section);
};
