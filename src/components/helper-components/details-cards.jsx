import React from 'react';
import withDetails from '../hocs/withDetails';
import ItemDetails from '../ItemDetails/ItemDetails';
import withApiService from '../hocs/withApiService';
import { methodCreater } from '../../services/utils';

const withSettings = (Wrapped, image, arr) => {
	return props => {
		return <Wrapped {...props} imageSection={image} listPoints={arr} />;
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

export const PersonDetails = withApiService(withDetails(ConfiguredPersonDetails), methodCreater('getPerson'));

export const StarshipDetails = withApiService(withDetails(ConfiguredStarshipDetails), methodCreater('getStarship'));

export const PlanetDetails = withApiService(withDetails(ConfiguredPlanetDetails), methodCreater('getPlanet'));
