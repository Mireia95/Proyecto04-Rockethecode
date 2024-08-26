import './Logo.css';

//Logo of my page
export const createLogo = () => {
  const linkHome = document.createElement('a');
  linkHome.href = '';
  const logo = document.createElement('img');
  logo.alt = 'logo MG';
  logo.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1722707440/ROCKTHECODE/Proyecto04_portfolio/LogoMG.png';
  linkHome.classList.add('logo');
  linkHome.appendChild(logo);
  return linkHome;
};

//Logo white for start page
export const createLogoWhite = () => {
  const logo = document.createElement('img');
  logo.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1722707440/ROCKTHECODE/Proyecto04_portfolio/LogoMG_white.png';
  logo.alt = 'logo MG';
  logo.classList.add('logo');
  return logo;
};
