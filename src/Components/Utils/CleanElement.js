export const cleanElement = (element, father) => {
  setTimeout(() => {
    father.removeChild(element);
  }, 500);
};

export const cleanElementNoDelay = (element, father) => {
  father.removeChild(element);
};
