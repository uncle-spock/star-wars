import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PlanetsList } from '../helper-components';
import { PlanetDetails } from '../helper-components';
import { ApiServiceConsumer } from '../ApiServiceContext';

const PlanetsPage = ({
	selectedItemId,
	onItemSelect
}) => {
	return (
		<ApiServiceConsumer>
			{api => {
				return (
					<InfoPanel
						leftBlock={
							<PlanetsList
								selectedItemId={selectedItemId}
								onItemSelect={onItemSelect}
							/>
						}
						rightBlock={
							<PlanetDetails
								// api={api}
								selectedItemId={selectedItemId}
							/>}
					/>
				);
			}}
		</ApiServiceConsumer>
	);
};

export default PlanetsPage;
