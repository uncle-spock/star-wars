import React from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonalDetails from '../PersonDetails/PersonDetails';

const App = () => {
	return (
		<PageLayout>
			<div className="container">
				<div className="mb-5">
					<RandomPlanet />
				</div>

				<div className="row">
					<div className="col-12 col-md-6">
						<ItemList />
					</div>

					<div className="col-12 col-md-6">
						<PersonalDetails />
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default App;
