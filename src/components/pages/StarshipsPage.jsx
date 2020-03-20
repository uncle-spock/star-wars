import React from 'react';
import { StarshipsList } from '../helper-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history, match }) => {
	const { itemId } = match.params;

	const handleSelectItem = id => history.push(id);

	return (
		<StarshipsList
			selectedItemId={itemId}
			onItemSelect={handleSelectItem}
		/>
	);
};

export default withRouter(StarshipsPage);
