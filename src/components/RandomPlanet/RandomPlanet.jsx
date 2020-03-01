import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import * as api from '../../services/api/apiService';

import './random-planet.scss';

class RandomPlanet extends Component {
	state = {
		id: null,
		name: null,
		rotationPeriod: null,
		orbitalPeriod: null,
		diameter: null,
		climate: null
	}

	constructor() {
		super();
		this.updatePlanet();
	}

	async updatePlanet() {
		try {
			const allPlanets = (await api.getPlanets()).results;
			const id = Math.floor(Math.random() * (allPlanets.length - 1));
			const planet = allPlanets[id];
			const { name, rotation_period, orbital_period, diameter, climate } = planet;

			this.setState({
				id,
				name: name,
				rotationPeriod: rotation_period,
				orbitalPeriod: orbital_period,
				diameter: diameter,
				climate: climate
			});
		} catch (err) {
			throw new Error(`Oops. Missing update planet: ${err}`);
		}
	}

	render() {
		const { id, name, rotationPeriod, orbitalPeriod, diameter, climate } = this.state;

		return (
			<div className="card-box with-img">
				<div className="card-img-box">
					{id !== null ? <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" /> : <Loader />}
				</div>

				<div className="card-content-box">
					<h3>{name}</h3>

					<ul className="details-list">
						<li>
							<span className="details-label">Rotation Period:</span>
							<span className="details-value">{rotationPeriod}</span>
						</li>

						<li>
							<span className="details-label">Orbital Period:</span>
							<span className="details-value">{orbitalPeriod}</span>
						</li>

						<li>
							<span className="details-label">Diameter:</span>
							<span className="details-value">{diameter}</span>
						</li>

						<li>
							<span className="details-label">Climate:</span>
							<span className="details-value">{climate}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default RandomPlanet;
