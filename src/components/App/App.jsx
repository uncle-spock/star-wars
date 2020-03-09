import React, { Component } from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import StarshipsPage from '../StarshipsPage/StarshipsPage';
import PlanetsPage from '../PlanetsPage/PlanetsPage';

class App extends Component {
	state = {
		selectedPersonId: null,
		selectedStarshipId: null,
		selectedPlanetId: null
	}

	onPersonSelect = id => {
		this.setState({
			selectedPersonId: id
		});
	}

	onStarshipSelect = id => {
		this.setState({
			selectedStarshipId: id
		});
	}

	onPlanetSelect = id => {
		this.setState({
			selectedPlanetId: id
		});
	}

	render() {
		const { selectedPersonId, selectedStarshipId, selectedPlanetId } = this.state;

		return (
			<PageLayout>
				<div className="container">
					<div className="mb-5">
						<RandomPlanet />
					</div>

					<div className="mb-5">
						<PeoplePage
							selectedItemId={selectedPersonId}
							onItemSelect={this.onPersonSelect}
						/>
					</div>

					<div className="mb-5">
						<StarshipsPage
							selectedItemId={selectedStarshipId}
							onItemSelect={this.onStarshipSelect}
						/>
					</div>

					<PlanetsPage
						selectedItemId={selectedPlanetId}
						onItemSelect={this.onPlanetSelect}
					/>
				</div>
			</PageLayout>
		);
	}
};

export default App;
