import { contacts } from '../../Data/DataContacts';
import './ContactPopup.css';
import './ContactPopupResponsive.css';

export const printContactPopup = () => {
  const main = document.querySelector('main');
  const divBG = document.createElement('div');
  divBG.classList.add('bgContactme');
  const divPopup = document.createElement('div');
  divPopup.classList.add('contactme');
  const close = document.createElement('button'); //button to close popup
  close.innerHTML =
    "<img alt='close' src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1724077957/ROCKTHECODE/Proyecto04_portfolio/contactme/closeWhite.png' </img>";
  close.classList.add('close');
  const closeImg = document.createElement('img');
  close.appendChild(closeImg);

  const h3 = document.createElement('h3');
  h3.innerText = 'Contact me';
  const divMail = document.createElement('div');
  divMail.classList.add('mail');
  divMail.innerHTML =
    "<img alt='email' src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1724074807/ROCKTHECODE/Proyecto04_portfolio/contactme/mail.png'> </img> <a href=mailto:mireia95.granzotto@gmail.com>mireia95.granzotto@gmail.com </a>";

  divPopup.appendChild(close);
  divPopup.appendChild(h3);
  divPopup.appendChild(divMail);
  divBG.appendChild(divPopup);

  const divLink = document.createElement('div');

  for (const contact of contacts) {
    const link = document.createElement('a');
    link.href = contact.link;
    const img = document.createElement('img');
    img.alt = contact.name;
    img.src = contact.img;
    link.appendChild(img);
    divLink.appendChild(link);
    divPopup.appendChild(divLink);
  }
  main.appendChild(divBG);

  close.addEventListener('click', () => {
    divBG.classList.add('closeX');
    setTimeout(() => {
      main.removeChild(divBG);
    }, 2000);
  });
};
