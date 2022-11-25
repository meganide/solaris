// Denna modul är ansvarig för alla http requests

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/';
const API_KEY = await httpGetApiKey(); // top level await

async function httpGetApiKey() {
  let response = await fetch(`${BASE_URL}keys`, {
    method: 'POST',
  });
  let data = await response.json();

  return data.key;
}

async function httpGetBodies() {
  let response = await fetch(`${BASE_URL}bodies`, {
    method: 'GET',
    headers: { 'x-zocom': API_KEY },
  });
  let data = await response.json();

  return data.bodies;
}

export { httpGetBodies };
