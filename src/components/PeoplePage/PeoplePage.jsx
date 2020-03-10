import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import InfoPanel from '../InfoPanel/InfoPanel';
import * as api from '../../services/api/apiService';

const PeoplePage = ({
	selectedItemId,
	onItemSelect
}) => {
	const listSettings = (listItem) => (
		{
			id: listItem.id,
			label: listItem.name,
			additionalInfo: [`Birth year: ${listItem.birthYear}`]
		}
	);

	return (
		<InfoPanel
			leftBlock={
				<ItemList
					selectedItemId={selectedItemId}
					onItemSelect={onItemSelect}
					getData={api.getPeople}
					renderItem={listSettings}
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
