import { projects } from '../../Data/DataProjects';
import { createButtonBack } from '../Utils/ButtonBackHome';
import { createTitleSection } from '../Utils/TitleSection';
import './Projects.css';

export const printProjects = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Projects', 'Some things I built', section);
  section.id = 'projects';
  const divSection = document.createElement('div');
  const divContArticle = document.createElement('div');
  divContArticle.classList.add('contArticles');
  for (const project of projects) {
    const article = document.createElement('article');
    article.classList.add('project');
    const img = document.createElement('img');
    img.src = project.Img;
    img.alt = project.Name;
    const h3 = document.createElement('h3');
    h3.innerText = project.Name;
    const pDescript = document.createElement('p');
    pDescript.innerText = project.Description;
    const divCodes = document.createElement('div');
    divCodes.classList.add('codes');
    for (const code of project.Codes) {
      const p = document.createElement('p');
      p.innerText = code;
      divCodes.appendChild(p);
    }
    const divLinks = document.createElement('div');
    const prevLink = document.createElement('a');
    prevLink.innerText = 'Preview';
    prevLink.target = '_blank';
    prevLink.href = project.Preview;
    const gitHubLink = document.createElement('a');
    gitHubLink.innerText = 'GitHub';
    gitHubLink.target = '_blank';
    gitHubLink.href = project.GitHub;
    divLinks.appendChild(prevLink);
    divLinks.appendChild(gitHubLink);
    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(pDescript);
    article.appendChild(divCodes);
    article.appendChild(divLinks);
    divContArticle.appendChild(article);
  }

  const backHome = createButtonBack(section);
  divSection.appendChild(divContArticle);
  section.appendChild(divSection);
  section.appendChild(backHome);
  main.appendChild(section);
};
