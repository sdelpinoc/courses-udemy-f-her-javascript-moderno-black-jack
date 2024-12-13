import _ from 'underscore';

/**
 * Crea un deck de cartas para blackjack.
 * 
 * @param {string[]} tiposDeCartas - Los tipos de cartas, ej: [C, D, H, S]
 * @param {string[]} tiposEspeciales - Los tipos especiales de cartas, ej: [A, J, Q, K]
 * @returns {string[]} Un deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0) {
    throw new Error('Tipos de cartas es obligatorio como arreglo de string');
  }

  if (!tiposEspeciales || tiposEspeciales.length === 0) {
    throw new Error('Tipos especiales es obligatorio como arreglo de string');
  }

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  console.log({ deck });

  deck = _.shuffle(deck);

  return deck;
}