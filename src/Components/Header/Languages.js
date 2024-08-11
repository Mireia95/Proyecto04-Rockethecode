import { languages } from '../../Data/Data';

export const createSelectLang = () => {
  const select = document.createElement('select');
  for (const lang of languages) {
    const option = document.createElement('option');
    option.innerText = lang;
    select.appendChild(option);
  }
  return select;
};
