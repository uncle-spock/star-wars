import React from 'react';
import ItemList from "../ItemList/ItemList";
import withData from "../hocs/withData";
import withApiService from '../hocs/withApiService';
import { methodCreater } from '../../services/utils';

const withSettings = (Wrapped, fn) => {
	return props => {
		return <Wrapped {...props} renderItem={fn} />;
	};
};

const ConfiguredPeopleList = withSettings(
	ItemList,
	listItem => (
		{
			id: listItem.id,
			label: listItem.name,
			additionalInfo: [`Birth year: ${listItem.birthYear}`]
		}
	)
);

const ConfiguredStarshipsList = withSettings(
	ItemList,
	listItem => (
		{
			id: listItem.id,
			label: listItem.name,
			additionalInfo: [`Model: ${listItem.model}`]
		}
	)
);

const ConfiguredPlanetsList = withSettings(
	ItemList,
	listItem => (
		{
			id: listItem.id,
			label: listItem.name,
			additionalInfo: [`D: ${listItem.diameter}`]
		}
	)
);

export const PeopleList = withApiService(withData(ConfiguredPeopleList), methodCreater('getPeople'));

export const StarshipsList = withApiService(withData(ConfiguredStarshipsList), methodCreater('getAllStarships'));

export const PlanetsList = withApiService(withData(ConfiguredPlanetsList), methodCreater('getAllPlanets'));