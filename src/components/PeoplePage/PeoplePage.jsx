import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';
import { PeopleList } from '../helper-components';

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
				<ItemDetails
					selectedItemId={selectedItemId}
					getData={api.getPerson}
					imageSection="characters"
					listPoints={['gender', 'birthYear', 'eyeColor']}
				/>
			}
		/>
	);
};

export default PeoplePage;
