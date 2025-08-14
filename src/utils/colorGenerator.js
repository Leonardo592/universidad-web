const SATURATION = 75;
const LIGHTNESS_BG = 92;
const LIGHTNESS_TEXT = 35;
const ALPHA_BG = 0.6;

function getHueFromString(str) {
  if (!str) return 0;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  return Math.abs(hash % 360);
}

export const defaultColorStyle = { bg: `rgba(156, 163, 175, ${ALPHA_BG})`, text: '#4B5563' };

export const generateAreaColorStyle = (areaNameInput) => {
  const areaName = areaNameInput ? String(areaNameInput).trim() : null;

  if (!areaName) {
    return defaultColorStyle;
  }

  const hue = getHueFromString(areaName);
  const bgColor = `hsla(${hue}, ${SATURATION}%, ${LIGHTNESS_BG}%, ${ALPHA_BG})`;
  const textColor = `hsl(${hue}, ${SATURATION}%, ${LIGHTNESS_TEXT}%)`;

  return { bg: bgColor, text: textColor };
};