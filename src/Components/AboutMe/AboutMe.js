import { createTitleSection } from '../Utils/TitleSection';
import './AboutMe.css';
import './AboutMeResponsive.css';
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
  const divSection = document.createElement('div');
  const divP = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML =
    "From Cinema to Programming. <br><br> Currently, I am a VFX Production Coordinator in the cinema sector. This job has allowed me to understand the importance of good organization and teamwork. Resolving questions and solving problems are part of my daily routine to ensure the project progresses smoothly, making communication clear between differents departments. Despite the satisfaction of working in this industry, my love for programming never faded. Studying graphic design in high school gave me a comprehensive view of the creative process, using tools like Figma and Adobe Illustrator. At university I explored computer science and the basic of programming languages, such as HTML, CSS, Ruby, MySQL, Matlab and Processing. To expand my knowledge in programming I decided to start a bootcamp to became a full-stack web developer, where I am currently studying and acquiring solid skills day by day. <br> <br> I consider myself an organized, flexible, and very curious person, with a capacity for quick and continuous learning. My experience in production, mixed with my programming studies, allows me to write solid and organized code, enjoying teamwork and the close collaboration with designers. <br> I am excited to apply and develop these skills in a professional environment and grow in this dynamic area of work. <br> <br> In my free time I like to spend time in nature, I love the sea and board sports. My current dream is to buy a camper and travel around the world. I constantly set goals for myself because when you stop learning, you stop growing. And I don't want to stop growing.";

  const backHome = createButtonBack(section);

  divP.appendChild(p);
  divSection.appendChild(divP);
  section.appendChild(img);
  section.appendChild(divSection);
  section.appendChild(backHome);
  main.appendChild(section);
};
