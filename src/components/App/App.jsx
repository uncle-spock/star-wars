import React from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages';
import { ApiServiceProvider } from '../ApiServiceContext';
import * as api from '../../services/api/apiService';

const App = () => {
	return (
		<ApiServiceProvider value={api}>
			<PageLayout>
				<div className="container">
					<div className="mb-5">
						<RandomPlanet />
					</div>

					<div className="mb-5">
						<PeoplePage />
					</div>

					<div className="mb-5">
						<StarshipsPage />
					</div>

					<PlanetsPage />
				</div>
			</PageLayout>
		</ApiServiceProvider>
	);
};

export default App;
