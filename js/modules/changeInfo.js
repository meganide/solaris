// Denna modul är ansvarig för att ändra infon på sida två beroende på vilken planet man klickat på.

const INFO_ELEMS = {
  NAME: document.querySelector('.info__name'),
  LATIN_NAME: document.querySelector('.info__latin-name'),
  DESC: document.querySelector('.info__desc'),
  CIRCUMFERENCE: document.querySelector('#circumference'),
  DISTANCE: document.querySelector('#distance'),
  MAX_TEMP: document.querySelector('#max-temp'),
  MIN_TEMP: document.querySelector('#min-temp'),
  MOONS: document.querySelector('#moons'),
};

function changeInfo(planetData) {
  INFO_ELEMS.NAME.innerText = planetData.name;
  INFO_ELEMS.LATIN_NAME.innerText = planetData.latinName;
  INFO_ELEMS.DESC.innerText = planetData.desc;
  INFO_ELEMS.CIRCUMFERENCE.innerText = formatLargeNumbers(planetData.circumference);
  INFO_ELEMS.DISTANCE.innerText = formatLargeNumbers(planetData.distance);

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

function formatLargeNumbers(planetData) {
  return new Intl.NumberFormat().format(planetData);
}

export { changeInfo };
