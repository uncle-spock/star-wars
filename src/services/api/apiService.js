import * as utils from '../utils';

const BASE_URL = 'https://swapi.co/api';

const fetchApiData = async url => {
	const response = await fetch(`${BASE_URL}/${url}/`);
	return await response.json();
};

export const getPeople = () => fetchApiData(`people`);

export const getPerson = async (id) => {
	const person = await fetchApiData(`people/${id}`);
	return utils.transformPersonData(person, id);
};

export const getFilms = () => fetchApiData('films');

export const getAllPlanets = () => fetchApiData('planets');

export const getPlanet = async (id) => {
	const planet = await fetchApiData(`planets/${id}`);
	return utils.transformPlanetData(planet, id);
};

export const getSpecies = () => fetchApiData('species');

export const getAllStarships = () => fetchApiData('starships');

export const getStarship = async (id) => {
	const starship = await fetchApiData(`starships/${id}`);
	return utils.transformStarshipData(starship, id);
};

export const getVehicles = () => fetchApiData('vehicles');
