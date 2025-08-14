// src/utils/formatters.js
export const fechaFormateada = (fechaISO) => {
    if (!fechaISO) return '';
    try {
      
      const fechaValida = fechaISO.includes('T') ? fechaISO : `${fechaISO}T00:00:00`;
      const date = new Date(fechaValida);
  
      // Verifica si la fecha es válida
      if (isNaN(date.getTime())) {
        console.warn("Fecha inválida recibida en formateador:", fechaISO);
        return fechaISO; // Devuelve original si no es válida
      }
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short', // 'short' para "dic.", 'long' para "diciembre"
        year: 'numeric'
      });
    } catch (e) {
      console.error("Error formateando fecha:", e, "Fecha original:", fechaISO);
      return fechaISO; // Devuelve original en caso de error
    }
  };