import React from 'react';
import ItemList from "../ItemList/ItemList";
import withData from "../hocs/withData";
import * as api from "../../services/api/apiService";

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

export const PeopleList = withData(ConfiguredPeopleList, api.getPeople);

export const StarshipsList = withData(ConfiguredStarshipsList, api.getAllStarships);

export const PlanetsList = withData(ConfiguredPlanetsList, api.getAllPlanets);