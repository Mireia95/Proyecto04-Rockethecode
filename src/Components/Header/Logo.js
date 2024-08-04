import './Logo.css';

//Logo of my page
export const createLogo = () => {
  const logo = document.createElement('img');
  logo.src = '';
  logo.alt = 'logo MG';
  logo.classList.add('logo');
  console.log('logo creato'); //!
};
