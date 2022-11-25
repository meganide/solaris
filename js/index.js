// Kör alla moduler vid page load

import { httpGetBodies } from './modules/httpRequests.js';
import { clickPlanet, makeSecondarySunClickable } from './modules/clickPlanets.js';

const ALL_PLANETS_DATA = await httpGetBodies(); // top level await

function main() {
  clickPlanet();
  makeSecondarySunClickable();
}

main();

export { ALL_PLANETS_DATA };
