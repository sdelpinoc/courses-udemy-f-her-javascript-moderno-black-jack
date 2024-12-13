
/**
 * Crea una carta de blackjack.
 * 
 * @param {string} carta - La carta a crear, en formato de string (ej. '2C', 'JD', 'AS').
 * 
 * @returns {HTMLImageElement} La carta creada.
 * @throws {Error} Si carta no es enviado o no es una string.
 */
export const crearCartaHTML = (carta) => {
  if (!carta) {
    throw new Error('La carta es obligatoria');
  }

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}-min.png`;
  imgCarta.classList.add('carta');
  
  return imgCarta;
}