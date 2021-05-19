import React, { useState } from 'react';
import Building from './Building.jsx';


export default function BuildingList(props) {
	const buildings = props.buildingList.map(building => Building(building)).join('');
	
	return <div className="building-list">
		{ buildings }
	</div>	
}
