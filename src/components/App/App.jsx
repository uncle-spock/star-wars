import React from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages';
import { Route } from 'react-router-dom';
import { StarshipDetails } from '../helper-components';

const App = () => {
	return (
		<PageLayout>
			<div className="container">
				<Route
					path="/"
					render={() => <h1>Welcome to Star Wars data base</h1>}
					exact
				/>

				<div className="mb-5">
					<RandomPlanet />
				</div>

				<Route
					path="/people/:itemId?"
					component={PeoplePage}
					exact
				/>

				<Route
					path="/planets"
					component={PlanetsPage}
					exact
				/>

				<Route
					path="/starships"
					component={StarshipsPage}
					exact
				/>

				<Route
					path="/starships/:itemId"
					component={({ match }) => {
						const { itemId } = match.params;

						return <StarshipDetails selectedItemId={itemId} />;
					}}
				/>

			</div>
		</PageLayout>
	);
};

export default App;
