// src/utils/areaColors.js

export const colorPalette = [
    { bg: 'rgba(239, 68, 68, 0.15)', text: '#B91C1C' }, // Rojo
    { bg: 'rgba(167, 139, 250, 0.15)', text: '#6D28D9' }, // Púrpura
    { bg: 'rgba(250, 204, 21, 0.15)', text: '#A16207' }, // Amarillo
    { bg: 'rgba(52, 211, 153, 0.15)', text: '#047857' }, // Verde
    { bg: 'rgba(96, 165, 250, 0.15)', text: '#1D4ED8' }, // Azul
    { bg: 'rgba(249, 115, 22, 0.15)', text: '#C2410C' },  // Naranja
    { bg: 'rgba(34, 197, 94, 0.15)', text: '#15803D' },  // Verde Oscuro
  ];
  
  export const defaultColor = { bg: 'rgba(156, 163, 175, 0.15)', text: '#4B5563' }; // Gris
  
  export const getAreaColorFromList = (areaNameInput, allAreasList = []) => {
    const areaName = areaNameInput ? String(areaNameInput).trim() : null;
  
    if (!areaName || !Array.isArray(allAreasList) || allAreasList.length === 0) {
      return defaultColor;
    }
  
    const areaIndex = allAreasList.findIndex(area => area.nombre && area.nombre.trim() === areaName);
  
    if (areaIndex !== -1) {
      const colorIndex = areaIndex % colorPalette.length;
      return colorPalette[colorIndex];
    } else {
      return defaultColor;
    }
  };