// export const extractId = (str) => {
// 	const idRegExp = /\/([0-9]*)\/$/;
// 	return str.match(idRegExp)[1];
// };

export const transformPlanetData = (planet, id) => {
	const {
		name,
		rotation_period,
		orbital_period,
		diameter,
		climate,
		population
	} = planet;

	return {
		id,
		name,
		rotationPeriod: rotation_period,
		orbitalPeriod: orbital_period,
		diameter,
		climate,
		population,
	};
};

export const transformStarshipData = (starship, id) => {
	const {
		name,
		model,
		manufacturer,
		cost_in_credits,
		length,
		crew,
		passengers,
		cargo_capacity
	} = starship;

	return {
		id,
		name,
		model,
		manufacturer,
		costInCredits: cost_in_credits,
		length,
		crew,
		passengers,
		cargoCapacity: cargo_capacity
	};
};

export const transformPersonData = (person, id) => {
	const {
		name,
		gender,
		birth_year,
		eye_color
	} = person;

	return {
		id,
		name,
		gender,
		birthYear: birth_year,
		eyeColor: eye_color
	};
};
