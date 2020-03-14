import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PeopleList } from '../helper-components';
import { PersonDetails } from '../helper-components';
// import { ApiServiceConsumer } from '../ApiServiceContext';

const PeoplePage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		// <ApiServiceConsumer>
		// 	{api => {
		// 		return (
		<InfoPanel
			leftBlock={
				<PeopleList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
				/>
			}
			rightBlock={
				<PersonDetails
					// api={api}
					selectedItemId={selectedItemId}
				/>
			}
		/>
		// 		);
		// 	}}
		// </ApiServiceConsumer>
	);
};

export default PeoplePage;
