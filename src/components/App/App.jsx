import React, { Component } from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import StarshipsPage from '../StarshipsPage/StarshipsPage';

class App extends Component {
	state = {
		selectedPersonId: null,
		selectedStarshipId: null
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

	render() {
		const { selectedPersonId, selectedStarshipId } = this.state;

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

					<StarshipsPage
						selectedItemId={selectedStarshipId}
						onItemSelect={this.onStarshipSelect}
					/>
				</div>
			</PageLayout>
		);
	}
};

export default App;
