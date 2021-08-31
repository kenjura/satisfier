import React, { useState } from 'react';
import { getPart } from '../model/getAllParts';
import { useStore } from '../store';
import './Building.scss';


export default function Building(props) {
	const building = useStore(state => state.buildings[props.recipe]);
	const part = getPart(building.recipe) || {};

	if (!building) return <div className="building">unknown building "{props.recipe}"</div>

	return <tr className="building">
		<td className="building-qty">{building.buildingQty}</td>
		<td className="building-recipe">{building.recipe}</td>
		<td className="building-type">{part.building}</td>
		<td className="building-output">{part.outputQty}</td>
	</tr>;
}
