import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PlanetsList, PlanetDetails } from '../helper-components';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({
	history,
	match
}) => {
	const { itemId } = match.params;

	const handleSelectItem = id => history.push(id);

	return (
		<InfoPanel
			leftBlock={
				<PlanetsList
					selectedItemId={itemId}
					onItemSelect={handleSelectItem}
				/>
			}
			rightBlock={
				<PlanetDetails
					selectedItemId={itemId}
				/>}
		/>
	);
};

export default withRouter(PlanetsPage);
