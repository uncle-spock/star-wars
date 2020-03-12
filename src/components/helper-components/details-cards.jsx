import React from 'react';
import withDetails from '../hocs/withDetails';
import ItemDetails from '../ItemDetails/ItemDetails';
import * as api from '../../services/api/apiService';

const withSettings = (Wrapped, image, arr) => {
	return props => {
		return <Wrapped {...props} imageSection={image} listPoints={arr} />
	};
};

const ConfiguredPersonDetails = withSettings(
	ItemDetails,
	'characters',
	[
		'gender',
		'birthYear',
		'eyeColor'
	]
);

const ConfiguredStarshipDetails = withSettings(
	ItemDetails,
	'starships',
	[
		'model',
		'manufacturer',
		'costInCredits',
		'length',
		'crew',
		'passengers',
		'cargoCapacity',
	]
);

const ConfiguredPlanetDetails = withSettings(
	ItemDetails,
	'planets',
	[
		'rotationPeriod',
		'orbitalPeriod',
		'diameter',
		'climate',
		'population'
	]
);

export const PeopleDetails = withDetails(ConfiguredPersonDetails, api.getPerson);

export const StarshipDetails = withDetails(ConfiguredStarshipDetails, api.getStarship);

export const PlanetDetails = withDetails(ConfiguredPlanetDetails, api.getPlanet);