//*funcion para crear descripción en la sección Education y Experience

export const createDescript = (title, subtitle, descript, divDescript) => {
  divDescript.innerText = '';
  const h4 = document.createElement('h4');
  h4.innerText = title;
  const pSubtitle = document.createElement('p');
  pSubtitle.innerText = subtitle;
  const description = document.createElement('p');
  description.innerHTML = descript;

  divDescript.appendChild(h4);
  divDescript.appendChild(pSubtitle);
  divDescript.appendChild(description);
};
