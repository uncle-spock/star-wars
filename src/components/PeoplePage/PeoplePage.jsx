import React from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

const PeoplePage = ({
	selectedPersonId,
	onPersonSelect
}) => {
	return (
		<div className="row">
			<div className="col-12 col-md-6">
				<ItemList selectedPersonId={selectedPersonId} onPersonSelect={onPersonSelect} />
			</div>

			<div className="col-12 col-md-6">
				<PersonDetails selectedPersonId={selectedPersonId} />
			</div>
		</div>
	);
};

export default PeoplePage;
