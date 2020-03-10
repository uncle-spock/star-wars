import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';

const PlanetsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	const listSettings = (listItem) => (
		{
			id: listItem.id,
			label: listItem.name,
			additionalInfo: [`D: ${listItem.diameter}`]
		}
	);

	return (
		<InfoPanel
			leftBlock={
				<ItemList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
					getData={api.getAllPlanets}
					renderItem={listSettings}
				/>
			}
			rightBlock={
				<ItemDetails
					selectedItemId={selectedItemId}
					getData={api.getPlanet}
					imageSection="planets"
					listPoints={[
						'rotationPeriod',
						'orbitalPeriod',
						'diameter',
						'climate',
						'population'
					]}
				/>}
		/>
	);
};

export default PlanetsPage;
