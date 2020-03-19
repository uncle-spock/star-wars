import React from 'react';

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

const ItemDetails = ({
	imageSection,
	item,
	item: { id, name },
	listPoints
}) => {
	const renderList = (obj, arr) => {
		return arr.map(prop => (
			<li key={prop}>
				<span className="details-label">{itemListOptions[prop]}:</span>
				<span className="details-value">{obj[prop]}</span>
			</li>
		));
	};

	return (
		<>
			{!!id ? (
				<>
					<div className="card-img-box">
						<img src={`https://starwars-visualguide.com/assets/img/${imageSection}/${id}.jpg`} alt={imageSection} />
					</div>

					<div className="card-content-box">
						<h3>{name}</h3>

						<ul className="details-list">
							{renderList(item, listPoints)}
						</ul>
					</div>
				</>
			) : <span>Please select an item</span>}
		</>
	);
};

export default ItemDetails;
