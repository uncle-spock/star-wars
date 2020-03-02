import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import * as api from '../../services/api/apiService';
import * as utils from '../../services/utils';
import PlanetCard from '../PlanetCard/PlanetCard';

class RandomPlanet extends Component {
	state = {
		planet: {},
		isLoading: true
	}

	componentDidMount() {
		this.updatePlanet();
	}

	async updatePlanet() {
		try {
			const allPlanets = (await api.getAllPlanets()).results;
			const id = Math.floor(Math.random() * (allPlanets.length - 1));
			const planet = utils.transformPlanetData(allPlanets[id]);

			this.setState({
				planet,
				isLoading: false
			});
		} catch (err) {
			throw new Error(`Oops. Missing update planet: ${err}`);
		}
	}

	render() {
		const {
			planet,
			isLoading
		} = this.state;

		return (
			<div className="card-box with-img">
				{!isLoading ? <PlanetCard planet={planet} /> : <Loader />}
			</div>
		);
	}
};

export default RandomPlanet;
