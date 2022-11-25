// Denna modul ändrar på solens färg på page two beroende på vilken planet man klickat på. 
// Jag la denna modul i en egen fil eftersom jag inte tyckte att den passade in någon annanstans.

const SECONDARY_SUN_ELEMS = {
  secondary: document.querySelector('.sun--secondary'),
  firstLayer: document.querySelector('.sun--first-layer'),
  secondLayer: document.querySelector('.sun--second-layer'),
};

function changeSecondarySunColor(e) {
  const OPACITY = [1, 0.1, 0.06];
  const PLANET_BACKGROUND_COLOR = window.getComputedStyle(e.target).backgroundColor;

  const SUN_ELEMENTS_ARRAY = Array.from(Object.values(SECONDARY_SUN_ELEMS));
  SUN_ELEMENTS_ARRAY.forEach((elem, index) => {
    elem.style.backgroundColor = PLANET_BACKGROUND_COLOR;
    elem.style.opacity = OPACITY[index];
  });
}

export {changeSecondarySunColor}