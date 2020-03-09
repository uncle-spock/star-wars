import React from 'react';
import './item-card.scss';

const itemListOptions = {
	gender: 'Gender',
	birthYear: 'Birth year',
	eyeColor: 'Eye color',
	model: 'Model',
	manufacturer: 'Manufacturer',
	costInCredits: 'Cost in credits',
	length: 'Length',
	crew: 'Crew',
	passengers: 'Passengers',
	cargoCapacity: 'Cargo capacity',
	rotationPeriod: 'Rotation period',
	orbitalPeriod: 'Orbital period',
	diameter: 'Diameter',
	climate: 'Climate',
	population: 'Population',
};

const ItemCard = ({
	imageSection,
	item,
	item: { id, name },
	listPoints
}) => {
	const renderList = (obj, arr) => {
		return arr.map(prop => (
			<li>
				<span className="details-label">{itemListOptions[prop]}:</span>
				<span className="details-value">{obj[prop]}</span>
			</li>
		));
	};

	return (
		<>
			<div className="card-img-box">
				<img src={`https://starwars-visualguide.com/assets/img/${imageSection}/${id}.jpg`} alt="planet" />
			</div>

			<div className="card-content-box">
				<h3>{name}</h3>

				<ul className="details-list">
					{renderList(item, listPoints)}
				</ul>
			</div>
		</>
	);
};

export default ItemCard;