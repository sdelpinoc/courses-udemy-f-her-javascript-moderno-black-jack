import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * Turno de la computadora.
 * 
 * @param {number} puntosMinimos - La cantidad de puntos mínimos que se necesita
 * para ganar la ronda.
 * @param {HTMLSpanElement[]} puntosHTML - Un arreglo con los elemento HTML que
 * se van a modificar con los cambios de los puntos.
 * @param {HTMLElement} divCartasComputadora - El elemento HTML que se va a
 * utilizar para mostrar las cartas de la computadora.
 * @param {string[]} [deck = []] - El deck de cartas
 * 
 * @throws {Error} Si puntosMínimos no es enviado, si puntosHTML no es enviado o si deck no es enviado o está vacío
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  if (!puntosMinimos) throw new Error('Puntos mínimos son obligatorios');
  if (!puntosHTML) throw new Error('Puntos HTML son obligatorios');
  if (!deck) throw new Error('Deck es obligatorio');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }

  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana')
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana')
    }
  }, 100);
}