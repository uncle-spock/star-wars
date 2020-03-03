import React, { Component } from 'react';
import PageLayout from '../PageLayout/PageLayout'
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

class App extends Component {
	state = {
		selectedPersonId: null
	}

	onPersonSelect = id => {
		this.setState({
			selectedPersonId: id
		});
	}

	render() {
		const { selectedPersonId } = this.state;

		return (
			<PageLayout>
				<div className="container">
					<div className="mb-5">
						<RandomPlanet />
					</div>

					<div className="row">
						<div className="col-12 col-md-6">
							<ItemList selectedPersonId={selectedPersonId} onPersonSelect={this.onPersonSelect} />
						</div>

						<div className="col-12 col-md-6">
							<PersonDetails selectedPersonId={selectedPersonId} />
						</div>
					</div>
				</div>
			</PageLayout>
		);
	}
};

export default App;
