import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import * as api from '../../services/api/apiService';
import * as utils from '../../services/utils';

import './random-planet.scss';

class RandomPlanet extends Component {
	state = {
		planet: {}
	}

	constructor() {
		super();
		this.updatePlanet();
	}

	async updatePlanet() {
		try {
			const allPlanets = (await api.getAllPlanets()).results;
			const id = Math.floor(Math.random() * (allPlanets.length - 1));
			const planet = utils.transformPlanetData(allPlanets[id], id);

			this.setState({ planet });
		} catch (err) {
			throw new Error(`Oops. Missing update planet: ${err}`);
		}
	}

	render() {
		const {
			id,
			name,
			population,
			rotationPeriod,
			orbitalPeriod,
			diameter,
			climate
		} = this.state.planet;

		console.log(this.state.planet);


		return (
			<div className="card-box with-img">
				<div className="card-img-box">
					{id > 1 ? <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" /> : <Loader />}
				</div>

				<div className="card-content-box">
					<h3>{name}</h3>

					<ul className="details-list">
						<li>
							<span className="details-label">Population:</span>
							<span className="details-value">{population}</span>
						</li>

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
