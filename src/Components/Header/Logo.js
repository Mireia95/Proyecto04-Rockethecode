import './Logo.css';

//Logo of my page
export const createLogo = () => {
  const logo = document.createElement('img');
  logo.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1722707440/ROCKTHECODE/Proyecto04_portfolio/LogoMG.png';
  logo.alt = 'logo MG';
  logo.classList.add('logo');
  logo.addEventListener('click', () => {
    console.log('hai premuto la img'); //!
  });
  return logo;
};

//?Logo of my page white for start
export const createLogoWhite = () => {
  const logo = document.createElement('img');
  logo.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1722707440/ROCKTHECODE/Proyecto04_portfolio/LogoMG_white.png';
  logo.alt = 'logo MG';
  logo.classList.add('logo');
  logo.addEventListener('click', () => {
    console.log('hai premuto la img'); //!
  });
  return logo;
};
