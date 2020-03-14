import React, { Component } from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { StarshipsList, StarshipDetails } from '../helper-components';

class StarshipsPage extends Component {
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
					<StarshipsList
						selectedItemId={selectedItemId}
						onItemSelect={this.onItemSelect}
					/>
				}
				rightBlock={
					<StarshipDetails
						selectedItemId={selectedItemId}
					/>
				}
			/>
		);
	}
};

export default StarshipsPage;
