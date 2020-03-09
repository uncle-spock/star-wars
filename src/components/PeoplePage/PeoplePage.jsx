import React from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import * as api from '../../services/api/apiService';

const PeoplePage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<div className="row">
			<div className="col-12 col-md-6">
				<ItemList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
					getData={api.getPeople}
				/>
			</div>

			<div className="col-12 col-md-6">
				<PersonDetails selectedPersonId={selectedItemId} />
			</div>
		</div>
	);
};

export default PeoplePage;
