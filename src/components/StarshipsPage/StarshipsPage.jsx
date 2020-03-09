import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';

const StarshipsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<InfoPanel
			leftBlock={
				<ItemList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
					getData={api.getAllStarships}
					renderItem={({ id, name, model }) => ({
						id: id,
						label: name,
						additionalInfo: [`Model: ${model}`]
					})}
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
