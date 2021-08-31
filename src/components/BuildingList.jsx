import React, { useState } from 'react';
import Building from './Building.jsx';

import { useStore } from '../store';

export default function BuildingList(props) {
	// const buildings = props.buildingList.map(building => Building(building)).join('');
	const buildings = useStore(state => state.buildings);
	
	return <table className="building-list">
		<thead>
			<tr>
				<th>Qty</th>
				<th>Recipe</th>
				<th>Building</th>
				<th>Output/min</th>
			</tr>
		</thead>
		<tbody>
			{ Object.entries(buildings).map(([k, building]) => <Building recipe={building.recipe} key={building.recipe} />) }
		</tbody>
	</table>	
}
