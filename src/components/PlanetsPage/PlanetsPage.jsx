import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PlanetsList } from '../helper-components';
import { PlanetDetails } from '../helper-components';

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
				<PlanetDetails
					selectedItemId={selectedItemId}
				/>}
		/>
	);
};

export default PlanetsPage;
