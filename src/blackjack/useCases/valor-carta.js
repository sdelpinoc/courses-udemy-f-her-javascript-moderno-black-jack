/**
 * Calcula el valor de una carta de blackjack.
 * 
 * @param {string} carta - La carta de la que se quiere obtener el valor, 
 * representada en formato de cadena (ej. '2C', 'JD', 'AS').
 * @returns {number} El valor numérico de la carta: 2-10 para cartas numéricas, 
 * 10 para J, Q y K, y 11 para A.
 * @throws {Error} Si la carta no está definida.
 */
export const valorCarta = (carta) => {
  if (!carta) {
    throw new Error('La carta es obligatoria');
  }

  const valor = carta.substring(0, carta.length - 1);

  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}