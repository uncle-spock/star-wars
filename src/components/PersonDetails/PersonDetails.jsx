import React, { Component } from 'react';

import * as api from '../../services/api/apiService';

import './person-details.scss';
import personImg from '../../assets/img/r2d2.jpg';

class PersonalDetails extends Component {
	// state = {
	// 	person: null
	// }

	componentDidUpdate() {
		this.updatePerson();
	}

	async updatePerson() {
		const { selectedPersonId } = this.props;

		try {
			const person = (await api.getPerson(selectedPersonId)).results;

			this.setState({ person });
		} catch (err) {
			throw new Error(`Oops. Missing update people list: ${err}`);
		}
	}

	render() {
		const { person } = this.state;

		if (!person) return null;

		const { name, gender, birthYear, eyeColor } = person;


		return (
			<div className="card-box with-img">
				<div className="card-img-box">
					<img src={personImg} alt="person" />
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

export default PersonalDetails;
