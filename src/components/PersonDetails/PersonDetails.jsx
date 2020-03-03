import React, { Component } from 'react';

import './person-details.scss';

import * as api from '../../services/api/apiService';
import Loader from '../Loader/Loader';


class PersonDetails extends Component {
	state = {
		person: null,
		isLoading: true
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
			this.updatePerson();
		}
	}

	async updatePerson() {
		const { selectedPersonId } = this.props;

		if (!selectedPersonId) {
			try {
				const person = (await api.getPeople())[0];

				this.setState({
					person,
					isLoading: false
				});

				return;
			} catch (err) {
				throw new Error(`Oops. Missing update person details: ${err}`);
			}
		};

		this.setState({
			isLoading: true
		});

		try {
			const person = await api.getPerson(selectedPersonId);

			this.setState({
				person,
				isLoading: false
			});
		} catch (err) {
			throw new Error(`Oops. Missing update person details: ${err}`);
		}
	}

	render() {
		const { person, isLoading } = this.state;

		if (isLoading) return <Loader />;

		const { id, name, gender, birthYear, eyeColor } = person;

		return (
			<div className="card-box with-img">
				<div className="card-img-box">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="people" />
				</div>

				<div className="card-content-box">
					<h3>{name}</h3>

					<ul className="details-list">
						<li>
							<span className="details-label">Gender:</span>
							<span className="details-value">{gender}</span>
						</li>

						<li>
							<span className="details-label">Birth Year:</span>
							<span className="details-value">{birthYear}</span>
						</li>

						<li>
							<span className="details-label">Eye color:</span>
							<span className="details-value">{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default PersonDetails;
