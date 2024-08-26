import './Footer.css';

export const printFooter = () => {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.innerHTML = '<span>&#169 </span> 2024 Mireia Granzotto';
  footer.appendChild(p);
  document.body.appendChild(footer);
};
