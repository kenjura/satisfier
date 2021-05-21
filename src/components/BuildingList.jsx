import React, { useState } from 'react';
import Building from './Building.jsx';

import { useStore } from '../store';

export default function BuildingList(props) {
	// const buildings = props.buildingList.map(building => Building(building)).join('');
	const buildings = useStore(state => state.buildings);
	const calculate = useStore(state => state.calculate);
	
	return <div className="building-list">
		<button onClick={calculate}>Calculate</button>
		{ Object.entries(buildings).map(([k, building]) => <Building recipe={building.recipe} key={building.recipe} />) }
	</div>	
}
