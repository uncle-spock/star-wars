import React, { Component } from 'react';
import * as api from '../../services/api/apiService';
import Loader from '../Loader/Loader';

class ItemList extends Component {
	state = {
		peopleList: [],
		isLoading: true
	}

	componentDidMount() {
		this.updatePeopleList();
	}

	async updatePeopleList() {
		try {
			const peopleList = await api.getPeople();

			this.setState({
				peopleList,
				isLoading: false
			});
		} catch (err) {
			throw new Error(`Oops. Missing update people list: ${err}`);
		}
	}

	renderItems(arr) {
		const { selectedPersonId, onPersonSelect } = this.props;

		return arr.map(person => {
			const { id, name } = person;

			return (
				<li
					key={id}
					onClick={() => onPersonSelect(id)}
					className={id === selectedPersonId ? 'selected' : ''}
				>
					{name}
				</li>
			);
		});
	}

	render() {
		const { peopleList, isLoading } = this.state;

		return (
			<ul className="separated-list" >
				{!isLoading ? this.renderItems(peopleList) : <Loader />}
			</ul>
		);
	}
};

export default ItemList;
