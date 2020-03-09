import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import * as api from '../../services/api/apiService';
import ItemCard from '../ItemCard/ItemCard';

class RandomPlanet extends Component {
	state = {
		planet: {},
		isLoading: true
	}

	componentDidMount() {
		this.updatePlanet();
		// this.interval = setInterval(this.updatePlanet, 5000);
	}

	// componentWillUnmount() {
	// 	clearInterval(this.interval);
	// }

	updatePlanet = async () => {
		try {
			const allPlanets = await api.getAllPlanets();
			const id = Math.floor(Math.random() * (allPlanets.length - 1));
			const planet = allPlanets[id];

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
				{!isLoading ? (
					<ItemCard
						imageSection="planets"
						item={planet}
						listPoints={[
							'population',
							'rotationPeriod',
							'orbitalPeriod',
							'diameter',
							'climate',
						]}
					/>
				) : <Loader />}
			</div>
		);
	}
};

export default RandomPlanet;
