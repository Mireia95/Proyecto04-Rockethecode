import './ContactMe.css';

export const createContactMe = () => {
  const section = document.createElement('section');
  section.id = 'contactMe';
  section.innerHTML =
    "<h4> Hello, I'm </h4> <h1> Mireia Granzotto. </h1> <h3> I'm a <b class='workColor'> full stack developer </b> based in Barcelona. </h3> ";
  const buttonContactMe = document.createElement('button');
  buttonContactMe.innerText = 'Contact me!';
  section.appendChild(buttonContactMe);
  return section;
};
