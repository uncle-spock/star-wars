import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';

const PlanetsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<InfoPanel
			leftBlock={
				<ItemList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
					getData={api.getAllPlanets}
					renderItem={({ id, name, diameter }) => ({
						id: id,
						label: name,
						additionalInfo: [`D: ${diameter}`]
					})}
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
