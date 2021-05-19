import React, { useState } from 'react';

import { useStore } from '../store';


export default function Building(props) {
	const building = useStore(state => state.buildings[props.Recipe]);

	if (!building) return <div className="building">unknown building "{props.Recipe}"</div>

	return <div className="building">
		<div className="building-recipe">{building.Recipe}</div>
		<div className="building-qty">{building.buildingQty}</div>
	</div>;
}
