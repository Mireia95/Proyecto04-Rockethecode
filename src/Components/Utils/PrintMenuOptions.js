import { options } from '../../Data/Options';
import { cleanElement } from './CleanElement';

//*esta funcion está usada tanto para el menú, como para el menú para iPad y mobile
export const printMenuOptions = (option, div, section, main, anim) => {
  const button = document.createElement('button');
  button.innerHTML = `<img src=${option.img} alt=${option.name}> </img> <h3> ${option.name} </h3>`;
  if (option.name === 'About Me') {
    button.classList.add('aboutMe');
  }
  button.addEventListener('click', () => {
    //limpio zona de section, para pintar nueva seccion cada vez que elijo,si no se solapan
    if (section !== null) {
      cleanElement(section, main);
    }
    div.classList.add(anim);

    //creo opciones para pintar la sección elegida
    //ya que "About Me" tiene un espacio, y no lo reconoceria en el array options , uso replace para quitar espacios a todos los option.name
    setTimeout(() => {
      const optionsNoSpaces = option.name.replace(' ', '');
      options[optionsNoSpaces]();
    }, 500);
  });
  div.appendChild(button);
};
