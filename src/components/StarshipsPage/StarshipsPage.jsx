import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { StarshipsList } from '../helper-components';
import { StarshipDetails } from '../helper-components';
import { ApiServiceConsumer } from '../ApiServiceContext';

const StarshipsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<ApiServiceConsumer>
			{api => {
				return (
					<InfoPanel
						leftBlock={
							<StarshipsList
								selectedItemId={selectedItemId}
								onItemSelect={onItemSelect}
							/>
						}
						rightBlock={
							<StarshipDetails
								// api={api}
								selectedItemId={selectedItemId}
							/>
						}
					/>
				);
			}}
		</ApiServiceConsumer>
	);
};

export default StarshipsPage;
