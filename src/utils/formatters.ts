export const capitalizeFirstLetter = (text: string) => {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return '';
};

export const removeSpaces = (text: string) => {
  return text.replace(/\s/g, '-');
};
