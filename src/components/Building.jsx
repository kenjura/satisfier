import React, { useState } from 'react';
import { getPart } from '../model/getAllParts';
import { useStore } from '../store';
import './Building.scss';


export default function Building(props) {
	const building = useStore(state => state.buildings[props.Recipe]);
	const part = getPart(building.Recipe) || {};

	if (!building) return <div className="building">unknown building "{props.Recipe}"</div>

	return <div className="building">
		<div className="building-recipe">{building.Recipe}</div>
		<div className="building-type">{part.building}</div>
		<div className="building-qty">{building.buildingQty}</div>
	</div>;
}
