import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';
import { StarshipsList } from '../helper-components';

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
				<ItemDetails
					selectedItemId={selectedItemId}
					getData={api.getStarship}
					imageSection="starships"
					listPoints={[
						'model',
						'manufacturer',
						'costInCredits',
						'length',
						'crew',
						'passengers',
						'cargoCapacity',
					]}
				/>
			}
		/>
	);
};

export default StarshipsPage;
