import React, { useState } from 'react';
import { useStore } from '../store';
import './Building.scss';


export default function Building(props) {
	const building = useStore(state => state.buildings[props.recipe]);

	if (!building) return <div className="building">unknown building "{props.recipe}"</div>

	return <div className="building">
		<div className="building-recipe">{building.recipe}</div>
		<div className="building-qty">{building.buildingQty}</div>
	</div>;
}
