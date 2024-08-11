import './Palette.css';

export const createPalette = () => {
  const button = document.createElement('button');
  const img = document.createElement('img');
  img.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1722795714/ROCKTHECODE/Proyecto04_portfolio/paletteBlue.png';
  button.appendChild(img);
  button.classList.add('palette');

  button.addEventListener('click', () => {
    console.log('change color!!'); //!
  });

  return button;
};
