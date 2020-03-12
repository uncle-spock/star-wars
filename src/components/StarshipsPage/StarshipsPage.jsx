import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { StarshipsList } from '../helper-components';
import { StarshipDetails } from '../helper-components/details-cards';

const StarshipsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<InfoPanel
			leftBlock={
				<StarshipsList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
				/>
			}
			rightBlock={
				<StarshipDetails
					selectedItemId={selectedItemId}
				/>
			}
		/>
	);
};

export default StarshipsPage;
