import React, { Component } from 'react';
import * as api from '../../services/api/apiService';
import Loader from '../Loader/Loader';


class StarshipDetails extends Component {
	state = {
		starship: {},
		isLoading: true
	}

	componentDidMount() {
		this.updateStarship();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedStarshipId !== prevProps.selectedStarshipId) {
			this.updateStarship();
		}
	}

	async updateStarship() {
		const { selectedStarshipId } = this.props;

		if (!selectedStarshipId) {
			try {
				const starship = (await api.getAllStarships())[0];

				this.setState({
					starship,
					isLoading: false
				});

				return;
			} catch (err) {
				throw new Error(`Oops. Missing update starship details: ${err}`);
			}
		};

		this.setState({
			isLoading: true
		});

		try {
			const starship = await api.getStarship(selectedStarshipId);

			this.setState({
				starship,
				isLoading: false
			});
		} catch (err) {
			throw new Error(`Oops. Missing update starship details: ${err}`);
		}
	}

	render() {
		const { starship, isLoading } = this.state;

		const {
			id,
			name,
			model,
			manufacturer,
			costInCredits,
			length,
			crew,
			passengers,
			cargoCapacity
		} = starship;

		return (
			<div className="card-box with-img">
				{!isLoading ? (
					<>
						<div className="card-img-box">
							<img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="people" />
						</div>

						<div className="card-content-box">
							<h3>{name}</h3>

							<ul className="details-list">
								<li>
									<span className="details-label">Model:</span>
									<span className="details-value">{model}</span>
								</li>

								<li>
									<span className="details-label">Manufacturer:</span>
									<span className="details-value">{manufacturer}</span>
								</li>

								<li>
									<span className="details-label">Cost in credits:</span>
									<span className="details-value">{costInCredits}</span>
								</li>

								<li>
									<span className="details-label">Length:</span>
									<span className="details-value">{length}</span>
								</li>

								<li>
									<span className="details-label">Crew:</span>
									<span className="details-value">{crew}</span>
								</li>

								<li>
									<span className="details-label">Passengers:</span>
									<span className="details-value">{passengers}</span>
								</li>

								<li>
									<span className="details-label">Cargo capacity:</span>
									<span className="details-value">{cargoCapacity}</span>
								</li>
							</ul>
						</div>
					</>
				) : <Loader />}
			</div>
		);
	}
};

export default StarshipDetails;
