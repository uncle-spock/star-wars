const BASE_URL = 'https://swapi.co/api';

const response = async url => await fetch(`${BASE_URL}/${url}/`);

export const getPeople = async () => {
    try {
        return (await response(`people`)).json();
    } catch {
        throw new Error('something went wrong');
    }
};

export const getPerson = (id) => response(`people/${id}`);

export const getFilms = () => response('films');

export const getPlanets = () => response('planets');

export const getSpecies = () => response('species');

export const getStarships = () => response('starships');

export const getVehicles = () => response('vehicles');
