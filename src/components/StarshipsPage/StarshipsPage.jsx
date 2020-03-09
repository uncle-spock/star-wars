import React from 'react';
import ItemList from '../ItemList/ItemList';
import StarshipDetails from '../StarshipDetails/StarshipDetails';
import * as api from '../../services/api/apiService';

const StarshipsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<div className="row">
			<div className="col-12 col-md-6">
				<ItemList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
					getData={api.getAllStarships}
				/>
			</div>

			<div className="col-12 col-md-6">
				<StarshipDetails selectedStarshipId={selectedItemId} />
			</div>
		</div>
	);
};

export default StarshipsPage;
