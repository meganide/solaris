import { httpGetBodies } from './modules/httpRequests.js';
import { clickPlanet, makeSecondarySunClickable } from './modules/clickPlanets.js';

const ALL_PLANETS_DATA = await httpGetBodies();

function main() {
  clickPlanet();
  makeSecondarySunClickable();
}

main();

export { ALL_PLANETS_DATA };
