import React, { Component } from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import { PeopleList, PersonDetails } from '../helper-components';

class PeoplePage extends Component {
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
					<PeopleList
						selectedItemId={selectedItemId}
						onItemSelect={this.onItemSelect}
					/>
				}
				rightBlock={
					<PersonDetails
						selectedItemId={selectedItemId}
					/>
				}
			/>
		);
	}
};

export default PeoplePage;
