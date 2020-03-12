import React from 'react';
import withDetails from '../hocs/withDetails';
import ItemDetails from '../ItemDetails/ItemDetails';
import { ApiServiceConsumer } from '../ApiServiceContext';

const withSettings = (Wrapped, image, arr) => {
	return props => {
		return (
			<ApiServiceConsumer>
				{api => {
					return <Wrapped {...props} imageSection={image} listPoints={arr} api={api} />;
				}}
			</ApiServiceConsumer>
		);
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

export const PersonDetails = withDetails(ConfiguredPersonDetails, 'getPerson');

export const StarshipDetails = withDetails(ConfiguredStarshipDetails, 'getStarship');

export const PlanetDetails = withDetails(ConfiguredPlanetDetails, 'getPlanet');