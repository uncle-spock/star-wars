import React from 'react';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

const StarshipsPage = () => {
	return (
		<div className="row">
			<div className="col-12 col-md-6">
				<ItemList />
			</div>

			<div className="col-12 col-md-6">
				<PersonDetails />
			</div>
		</div>
	);
};

export default StarshipsPage;
