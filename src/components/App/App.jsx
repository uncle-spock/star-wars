import React, { useState } from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import { PeoplePage, StarshipsPage, PlanetsPage, LoginPage, SecretPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../helper-components';

const App = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);

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

				<Switch>
					<Route
						path="/people/:itemId?"
						component={PeoplePage}
						exact
					/>

					<Route
						path="/planets/:itemId?"
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

					<Route
						path="/login"
						render={() => {
							return (
								<LoginPage
									isLoggedIn={isLoggedIn}
									onLogin={setLoggedIn}
								/>
							);
						}}
						exact
					/>

					<Route
						path="/secret"
						render={() => {
							return <SecretPage isLoggedIn={isLoggedIn} />;
						}}
						exact
					/>

					<Route render={() => <h1>Page not found</h1>} />
				</Switch>
			</div>
		</PageLayout>
	);
};

export default App;
