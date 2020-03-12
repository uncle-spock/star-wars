import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PeopleList } from '../helper-components';
import { PeopleDetails } from '../helper-components';

const PeoplePage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<InfoPanel
			leftBlock={
				<PeopleList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
				/>
			}
			rightBlock={
				<PeopleDetails
					selectedItemId={selectedItemId}
				/>
			}
		/>
	);
};

export default PeoplePage;
