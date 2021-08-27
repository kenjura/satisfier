import cloneDeep from './cloneDeep';
import { getAlternateRecipes, getPart } from '../model/getAllParts';
import uid from './uid';

const alternateRecipes = getAlternateRecipes();

export default function calculate(parts, enabledAlts) {
	// parts.forEach(part => part.shoppingList = getShoppingList(part.Recipe, 1) );

	// let buildingList = parts.map(part => Object.assign({}, part, getPart(part.Recipe)));
	// let buildingList = cloneDeep(parts);
	let buildingList = Object.values(cloneDeep(parts));

	for (let depth = 0; depth < 10; depth++) {
		// buildingList.forEach(building => {
		for (let [key, building] of Object.entries(buildingList)) {
			if (building.processed) continue;

			const part = getPart(building.Recipe);//allParts.find(part => part.Recipe === building.Recipe);
			if (!part) throw new Error(`required part "${building.Recipe}" does not exist in dataset`);

			const subParts = [
				{ Recipe:part['Item 1'], outputQtyPerParentBuilding:Number(part['Q1']) },
				{ Recipe:part['Item 2'], outputQtyPerParentBuilding:Number(part['Q2']) },
				{ Recipe:part['Item 3'], outputQtyPerParentBuilding:Number(part['Q3']) },
				{ Recipe:part['Item 4'], outputQtyPerParentBuilding:Number(part['Q4']) },
			]

			const parentBuildingQty = building.buildingQty;

			subParts.forEach(sp => {
				if (!sp.Recipe) return;
				// const subPart = allParts.find(part => part.Recipe === sp.Recipe);
				const subPart = getPart(sp.Recipe);
				if (!subPart) return;

				// is there a better part? check alt recipes
				const altRecipes = alternateRecipes
					.filter(recipe => recipe.Output === subPart.Output)
					.filter(recipe => enabledAlts[recipe.Recipe]);
				const finalRecipe = altRecipes.length
					? altRecipes.sort((a,b) => b.altScore - a.altScore)[0]
					: subPart;

				const quantityOfSubPartNeeded = parentBuildingQty * sp.outputQtyPerParentBuilding;
				const quantityOfSubPartPerBuilding = Number(finalRecipe['Output qty/min']);
				const quantityOfSubPartBuildingsNeeded = quantityOfSubPartNeeded / quantityOfSubPartPerBuilding;

				buildingList.push({
					Recipe: finalRecipe.Recipe,
					building: finalRecipe.Building,
					buildingQty: quantityOfSubPartBuildingsNeeded,
				})
			});

			building.processed = true;
		};
	}

	// dedupe
	let buildingListMap = {};
	buildingList.forEach(building => {
		buildingListMap[building.Recipe] = { Recipe:building.Recipe };
	})
	for (let buildingRecipe in buildingListMap) {
		if (!buildingListMap.hasOwnProperty(buildingRecipe)) continue;

		let buildingsWithRecipe = buildingList.filter(building => building.Recipe === buildingRecipe);
		let totalBuildingQty = buildingsWithRecipe.reduce((p,c) => c.buildingQty + p, 0);

		buildingListMap[buildingRecipe].buildingQty = totalBuildingQty;

		buildingListMap[buildingRecipe].uid = uid();
	}
	
	// renderOutput(Object.values(buildingListMap));
	return buildingListMap;
}
