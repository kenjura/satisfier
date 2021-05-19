import allParts from '/data/parts.js';
import cloneDeep from '/helper/cloneDeep.js';

let cached = null;

export default function getAllParts() {
	if (cached) return cached;
	const cloned = cloneDeep(allParts);
	const mapped = cloned
		.map(part =>  {
			part['Output qty/min'] = Number(part['Output qty/min']);
			part.Q1 = Number(part.Q1);
			part.Q2 = Number(part.Q2);
			part.Q3 = Number(part.Q3);
			part.Q4 = Number(part.Q4);
			part.QB = Number(part.QB);
			part.Stage = Number(part.Stage);

			return part;
		});
	const sorted = mapped
		.sort((a,b) => {
			if (a.Recipe > b.Recipe) return 1;
			if (b.Recipe > a.Recipe) return -1;
			return 0;
		});
	cached = sorted;
	return sorted;
}