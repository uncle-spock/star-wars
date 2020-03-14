import React from 'react';
import withDetails from '../hocs/withDetails';
import ItemDetails from '../ItemDetails/ItemDetails';
import * as api from '../../services/api/apiService';
import { ApiServiceConsumer } from '../ApiServiceContext';

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

const foo = Wrapped => {
	return props => {
		return (
			<ApiServiceConsumer>
				{api => <Wrapped {...props} api={api} />}
			</ApiServiceConsumer>
		);
	}
}

export const PersonDetails = foo(withDetails(ConfiguredPersonDetails, 'getPerson'));

export const StarshipDetails = foo(withDetails(ConfiguredStarshipDetails, 'getStarship'));

export const PlanetDetails = foo(withDetails(ConfiguredPlanetDetails, 'getPlanet'));