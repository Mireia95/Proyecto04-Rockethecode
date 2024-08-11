export const cleanElement = (element, father) => {
  setTimeout(() => {
    father.removeChild(element);
  }, 500);
};
