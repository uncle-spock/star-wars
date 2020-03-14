import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { StarshipsList } from '../helper-components';
import { StarshipDetails } from '../helper-components';

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
