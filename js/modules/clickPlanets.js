// Denna modul gör planeterna klickbara och displayar page two. Denna modul är ansvarig för alla onClick events.

import { ALL_PLANETS_DATA } from '../index.js';
import { changeInfo } from './changeInfo.js';

function clickPlanet() {
  const PLANETS_ELEM = document.querySelectorAll('.planets__planet');

  PLANETS_ELEM.forEach((planet, index) => {
    planet.addEventListener('click', () => planetOnClick(ALL_PLANETS_DATA[index]));
  });
}

function planetOnClick(planetData) {
  toggleDisplayPages();
  changeInfo(planetData);
}

function toggleDisplayPages() {
  const PAGE_ONE = document.querySelector('#pageOne');
  const PAGE_TWO = document.querySelector('#pageTwo');
  PAGE_ONE.classList.toggle('hide');
  PAGE_TWO.classList.toggle('hide');
}

function makeSecondarySunClickable() {
  const SUN_SECONDARY = document.querySelector('.sun--second-layer');
  SUN_SECONDARY.addEventListener('click', toggleDisplayPages);
}

export { clickPlanet, makeSecondarySunClickable };
