import React, { Component } from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PlanetsList, PlanetDetails } from '../helper-components';

class PlanetsPage extends Component {
	state = {
		selectedItemId: null
	}

	onItemSelect = id => {
		this.setState({
			selectedItemId: id
		});
	}

	render() {
		const { selectedItemId } = this.state;

		return (
			<InfoPanel
				leftBlock={
					<PlanetsList
						selectedItemId={selectedItemId}
						onItemSelect={this.onItemSelect}
					/>
				}
				rightBlock={
					<PlanetDetails
						selectedItemId={selectedItemId}
					/>}
			/>
		);
	}
};

export default PlanetsPage;
