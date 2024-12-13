import { crearCartaHTML } from './useCases/crear-carta-html';
import { crearDeck } from './useCases/crear-deck';
import { pedirCarta } from './useCases/pedir-carta';
import { turnoComputadora } from './useCases/turno-computadora';
import { valorCarta } from './useCases/valor-carta';

let deck = [];

let puntosJugador = 0;

const tipos = ['C', 'D', 'H', 'S']; // Clubs, Diamonds, Hearts, Spades
const especiales = ['A', 'J', 'Q', 'K']; // As, Jack, Queen, King

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarga = crearCartaHTML(carta);
  divCartasJugador.append(imgCarga);

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);

  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
  console.clear();
  deck = [];
  deck = crearDeck(tipos, especiales);

  puntosJugador = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
