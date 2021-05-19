import React, { useState } from 'https://unpkg.com/es-react/dev';
import Building from '/components/Building.jsx';


export default function BuildingList(props) {
	const buildings = props.buildingList.map(building => Building(building)).join('');
	
	return <div className="building-list">
		{ buildings }
	</div>	
}