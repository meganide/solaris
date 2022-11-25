import { ALL_PLANETS_DATA } from '../index.js';
import { INFO_ELEMS } from '../modules/InfoElements.js';

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

function changeInfo(planetData) {
  INFO_ELEMS.NAME.innerText = planetData.name;
  INFO_ELEMS.LATIN_NAME.innerText = planetData.latinName;
  INFO_ELEMS.DESC.innerText = planetData.desc;
  INFO_ELEMS.CIRCUMFERENCE.innerText = planetData.circumference;
  INFO_ELEMS.DISTANCE.innerText = planetData.distance;

  const PLANET_TEMPERATURES = Array.from(Object.values(planetData.temp));
  INFO_ELEMS.MAX_TEMP.innerText = getMaxTemp(PLANET_TEMPERATURES);
  INFO_ELEMS.MIN_TEMP.innerText = getMinTemp(PLANET_TEMPERATURES);

  INFO_ELEMS.MOONS.innerText = getMoons(planetData);
}

function getMaxTemp(planetTemperatures) {
  return Math.max(...planetTemperatures);
}

function getMinTemp(planetTemperatures) {
  return Math.min(...planetTemperatures);
}

function getMoons(planetData) {
  return planetData.moons.join(', ');
}

function makeSecondarySunClickable() {
  const SUN_SECONDARY = document.querySelector('.sun--second-layer');
  SUN_SECONDARY.addEventListener('click', toggleDisplayPages);
}

export { clickPlanet, makeSecondarySunClickable };
