import * as utils from '../utils';

const BASE_URL = 'https://swapi.co/api';

const fetchApiData = async url => {
	const response = await fetch(`${BASE_URL}/${url}/`);
	return await response.json();
};

export const getPeople = async () => {
	const result = (await fetchApiData(`people`)).results;
	return result.map(person => utils.transformPersonData(person));
};

export const getPerson = async (id) => {
	const result = await fetchApiData(`people/${id}`);
	return utils.transformPersonData(result);
};

// export const getFilms = async () => (await fetchApiData('films')).results;

export const getAllPlanets = async () => {
	const result = (await fetchApiData('planets')).results;
	return result.map(planet => utils.transformPlanetData(planet));
};

export const getPlanet = async (id) => {
	const result = await fetchApiData(`planets/${id}`);
	return utils.transformPlanetData(result);
};

// export const getSpecies = async () => (await fetchApiData('species')).results;

// export const getAllStarships = async () => (await fetchApiData('starships')).results;

export const getStarship = async (id) => {
	const starship = await fetchApiData(`starships/${id}`);
	return utils.transformStarshipData(starship);
};

// export const getVehicles = async () => (await fetchApiData('vehicles')).results;
