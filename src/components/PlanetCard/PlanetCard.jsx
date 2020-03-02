import React from 'react';
import './planet-card.scss';

const PlanetCard = ({
	planet: {
		id,
		name,
		population,
		rotationPeriod,
		orbitalPeriod,
		diameter,
		climate
	} }) => {
	return (
		<>
			<div className="card-img-box">
				{id > 1 ? (
					<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
				) : (
						<span>The image for this planet is not available</span>
					)}
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
		</>
	);
};

export default PlanetCard;