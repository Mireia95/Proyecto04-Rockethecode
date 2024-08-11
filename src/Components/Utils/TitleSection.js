//? PRUEBA FUNZIONE GENERICA PER TITOLI DEL MAIN
/* dove passo i parametri del titolo, subtitle presenti in Data.js */
/* e passo section, ovvero il padre contenitore */
export const createTitleSection = (title, subtitle, section) => {
  const titleh2 = document.createElement('h2');
  titleh2.innerText = title;
  const subtitleh3 = document.createElement('h3');
  subtitleh3.innerText = subtitle;
  section.classList.add('mySection');
  section.appendChild(titleh2);
  section.appendChild(subtitleh3);
};
