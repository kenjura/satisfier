import allParts from '../data/parts.js';
import cloneDeep from '../helper/cloneDeep.js';

let cached = {
	allParts: null,
	allPartsMap: null,
	alternateRecipes: null,
};

export function getAlternateRecipes() {
	if (cached.alternateRecipes) return cached.alternateRecipes;
	const allParts = getAllParts();
	const alternateRecipes = allParts.filter(part => part.alternate);
	cached.alternateRecipes = alternateRecipes;
	return alternateRecipes;
}

export function getPart(Recipe) {
	const map = getPartsMap();
	return map[Recipe];
}

function createPartsMap(parts) {
	const map = {};
	parts.forEach(part => {
		map[part.Recipe] = part;
	})
	return map;
}

function getPartsMap() {
	if (cached.allPartsMap) return cached.allPartsMap;

	const map = createPartsMap(getAllParts());
	cached.allPartsMap = map;
	return map;
}

export default function getAllParts() {
	if (cached.allParts) return cached.allParts;
	const cloned = cloneDeep(allParts);
	const mapped = cloned
		.map(part =>  {
			part['Output qty/min'] = Number(part['Output qty/min']);
			part.Q1 = Number(part.Q1);
			part.Q2 = Number(part.Q2);
			part.Q3 = Number(part.Q3);
			part.Q4 = Number(part.Q4);
			part.QB = Number(part.QB);
			part.building = String(part.Building);
			part.Stage = Number(part.Stage);
			part.alternate = part.Alternate.toLowerCase() === 'yes';
			part.altScore = Number(part['Alt Score']);
			return part;
		});
	const sorted = mapped
		.sort((a,b) => {
			if (a.Recipe > b.Recipe) return 1;
			if (b.Recipe > a.Recipe) return -1;
			return 0;
		});
	cached.allParts = sorted;
	return sorted;
}
