import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';
import { PlanetsList } from '../helper-components';

const PlanetsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<InfoPanel
			leftBlock={
				<PlanetsList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
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
