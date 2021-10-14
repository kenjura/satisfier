import cloneDeep from './cloneDeep';
import { getAlternateRecipes, getPart } from '../model/getAllParts';
import uid from './uid';

const alternateRecipes = getAlternateRecipes();

export default function calculate(parts, enabledAlts) {
	let buildingList = Object.values(cloneDeep(parts));

	for (let depth = 0; depth < 10; depth++) {
		// buildingList.forEach(building => {
		for (let [key, building] of Object.entries(buildingList)) {
			if (building.processed) continue;

			const part = getPart(building.recipe);
			if (!part) throw new Error(`required part "${building.recipe}" does not exist in dataset`);

			const subParts = [
				{ recipe:part['Item 1'], outputQtyPerParentBuilding:Number(part['Q1']) },
				{ recipe:part['Item 2'], outputQtyPerParentBuilding:Number(part['Q2']) },
				{ recipe:part['Item 3'], outputQtyPerParentBuilding:Number(part['Q3']) },
				{ recipe:part['Item 4'], outputQtyPerParentBuilding:Number(part['Q4']) },
			]

			const parentBuildingQty = building.buildingQty;

			subParts.forEach(sp => {
				if (!sp.recipe) return;
				const subPart = getPart(sp.recipe);
				if (!subPart) return;

				// is there a better part? check alt recipes
				const altRecipes = alternateRecipes
					.filter(recipe => recipe.Output === subPart.Output)
					.filter(recipe => enabledAlts[recipe.recipe]);
				const finalRecipe = altRecipes.length
					? altRecipes.sort((a,b) => b.altScore - a.altScore)[0]
					: subPart;

				const quantityOfSubPartNeeded = parentBuildingQty * sp.outputQtyPerParentBuilding;
				const quantityOfSubPartPerBuilding = Number(finalRecipe['Output qty/min']);
				const quantityOfSubPartBuildingsNeeded = quantityOfSubPartNeeded / quantityOfSubPartPerBuilding;

				buildingList.push({
					recipe: finalRecipe.recipe,
					building: finalRecipe.Building,
					buildingQty: quantityOfSubPartBuildingsNeeded,
					outputQty: subPart['Output qty/min'] * quantityOfSubPartBuildingsNeeded,
				})
			});

			building.processed = true;
		};
	}

	// dedupe
	let buildingListMap = {};
	buildingList.forEach(building => {
		buildingListMap[building.recipe] = { recipe:building.recipe };
	})
	for (let buildingRecipe in buildingListMap) {
		if (!buildingListMap.hasOwnProperty(buildingRecipe)) continue;

		let buildingsWithRecipe = buildingList.filter(building => building.recipe === buildingRecipe);
		let totalBuildingQty = buildingsWithRecipe.reduce((p,c) => c.buildingQty + p, 0);
		let totalOutputQty = buildingsWithRecipe.reduce((p,c) => c.outputQty + p, 0);

		buildingListMap[buildingRecipe].buildingQty = totalBuildingQty;
		buildingListMap[buildingRecipe].outputQty = totalOutputQty;

		buildingListMap[buildingRecipe].uid = uid();
	}
	
	// renderOutput(Object.values(buildingListMap));
	return buildingListMap;
}
