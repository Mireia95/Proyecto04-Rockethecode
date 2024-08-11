import { createTitleSection } from '../Utils/TitleSection';
import './AboutMe.css';
import '../Utils/AnimInOut.css';
import { createButtonBack } from '../Utils/ButtonBackHome';

export const printAboutMe = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('animIn');
  createTitleSection('About Me', "Let's meet me!", section);
  section.id = 'aboutMe';
  const img = document.createElement('img');
  img.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1723211915/ROCKTHECODE/Proyecto04_portfolio/MireiaFoto.png';
  img.alt = 'Me';
  const divP = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML =
    'Del Cine a la Programación. <br><br> Actualmente, soy Coordinadora de Producción en el sector de los VFX de cine. Este trabajo me ha permitido entender lo importante que es una buena organización y el trabajo en equipo. Resolver dudas y solucionar problemas es mi día a día para que el proyecto avance, facilitando la comunicación entre diferentes departamentos. <br>  A pesar de la satisfacción de trabajar en este sector, el amor por la programación nunca se apagó. Por eso, he decidido participar en un bootcamp como desarrolladora web full stack, donde he adquirido conocimientos sólidos en Web Full Responsive, API integration y Website Development. Estoy entusiasmada por aplicar estas habilidades en un entorno profesional y seguir creciendo en este campo tan dinámico. <br>Estudiar diseño gráfico en bachillerato, me ha permitido tener una visión integral del proceso creativo e implementar diseños usando herramientas como Figma y AdobeIllustrator. <br> Me considero una persona organizada, flexible y muy curiosa, con una capacidad de aprendizaje rápido y continuo. Mi experiencia en la producción, combinada con mis habilidades técnicas, me permite escribir un código sólido y organizado, disfrutando poder trabajar en estrecha colaboración con los equipos de diseño. <br> Estoy lista para aportar valor a tu team y contribuir al éxito de tus proyectos digitales. ¡Vamos a construir algo increíble juntos!';

  const backHome = createButtonBack(section);

  divP.appendChild(p);

  section.appendChild(img);
  section.appendChild(divP);
  section.appendChild(backHome);

  main.appendChild(section);
};
