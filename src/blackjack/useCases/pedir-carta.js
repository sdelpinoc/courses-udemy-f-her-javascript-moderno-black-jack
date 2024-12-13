/**
 * Esta función me permite tomar una carta
 * @param {string[]} deck - Un arreglo con las cartas
 * @returns {string} La carta que se tomó
 * @throws {Error} No hay cartas en el deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }

  const carta = deck.pop();

  return carta;
}