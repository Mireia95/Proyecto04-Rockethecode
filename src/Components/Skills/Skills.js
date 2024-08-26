import { skills } from '../../Data/DataSkills';
import { createButtonBack } from '../Utils/ButtonBackHome';
import { createTitleSection } from '../Utils/TitleSection';
import './Skills.css';
import './SkillsResponsive.css';

export const printSkills = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('Skills', 'Which programms I work with', section);
  section.id = 'skills';
  const divSection = document.createElement('div');
  const backHome = createButtonBack(section);

  //creo los divs contenedores de mis skills
  let skillType = '';
  for (let i = 0; i < skills.length; i++) {
    if (!(skillType === skills[i].type)) {
      skillType = skills[i].type;
      const div = document.createElement('div');
      div.classList.add(skillType);
      //?div.id = skillType;
      const h4 = document.createElement('h4');
      h4.innerText = skillType;
      const divImgSkills = document.createElement('div');
      div.appendChild(h4);
      div.appendChild(divImgSkills);
      //imprimo iconos skills en cada contenedor, dependiendo del tipo
      for (const skill of skills) {
        if (skill.type === skillType) {
          const img = document.createElement('img');
          img.src = skill.img;
          img.alt = skill.name;
          divImgSkills.appendChild(img);
        }
      }
      divSection.appendChild(div);
    }
  }
  section.appendChild(divSection);
  section.appendChild(backHome);
  main.appendChild(section);
};
