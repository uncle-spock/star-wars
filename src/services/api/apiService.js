const BASE_URL = 'https://swapi.co/api';

const fetchApiData = async url => {
	const response = await fetch(`${BASE_URL}/${url}/`);
	return await response.json();
};

export const getPeople = () => fetchApiData(`people`);

export const getPerson = (id) => fetchApiData(`people/${id}`);

export const getFilms = () => fetchApiData('films');

export const getPlanets = () => fetchApiData('planets');

export const getSpecies = () => fetchApiData('species');

export const getStarships = () => fetchApiData('starships');

export const getVehicles = () => fetchApiData('vehicles');
