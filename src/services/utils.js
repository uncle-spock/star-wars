export const extractId = (str) => {
	const idRegExp = /\/([0-9]*)\/$/;
	return str.match(idRegExp)[1];
};

export const transformPlanetData = planet => {
	const {
		name,
		rotation_period,
		orbital_period,
		diameter,
		climate,
		population,
		url
	} = planet;

	return {
		id: extractId(url),
		name,
		rotationPeriod: rotation_period,
		orbitalPeriod: orbital_period,
		diameter,
		climate,
		population,
	};
};

export const transformStarshipData = starship => {
	const {
		name,
		model,
		manufacturer,
		cost_in_credits,
		length,
		crew,
		passengers,
		cargo_capacity,
		url
	} = starship;

	return {
		id: extractId(url),
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

export const transformPersonData = person => {
	const {
		name,
		gender,
		birth_year,
		eye_color,
		url
	} = person;

	return {
		id: extractId(url),
		name,
		gender,
		birthYear: birth_year,
		eyeColor: eye_color
	};
};

export const methodCreater = method => {
	return api => ({
		getData: api[method]
	});
};
