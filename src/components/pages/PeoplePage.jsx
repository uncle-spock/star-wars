import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PeopleList, PersonDetails } from '../helper-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({
	history,
	match
}) => {
	const { itemId } = match.params;

	const handleSelectItem = itemId => history.push(itemId);

	return (
		<InfoPanel
			leftBlock={
				<PeopleList
					selectedItemId={itemId}
					onItemSelect={handleSelectItem}
				/>
			}
			rightBlock={
				<PersonDetails
					selectedItemId={itemId}
				/>
			}
		/>
	);
};

export default withRouter(PeoplePage);
