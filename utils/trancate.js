export const trancate = (text, wordLen) => {
  if (!text) return;

  const textArray = text.split(" ");

  return textArray.slice(0, wordLen).join(" ");
};
