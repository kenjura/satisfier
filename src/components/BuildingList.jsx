// @flow

import type { Building as BuildingType } from '../state/building';
import type { Element } from 'react';

import React, { useState } from 'react';
import Building from './Building.jsx';

import { useStore } from '../store';
import { useRecoilState, useRecoilValue } from "recoil";
import * as building from "../state/building";
import { buildingList } from "../state/building";

type Props = {

}

export default function BuildingList(props:Props):Element<'table'> {
	// const buildings = props.buildingList.map(building => Building(building)).join('');
	// const buildings = useStore(state => state.buildings);
	const [ buildingList2 ] = useRecoilState(buildingList);

	
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
			{/* { Object.entries(todoList).map(([k, building:BuildingType]) => <Building recipe={building.recipe} key={building.recipe} />) } */}
			{
				Array.from(buildingList2.keys()).map(key => <Building key={key} building={buildingList2.get(key)} />)
			}
		</tbody>
	</table>	
}
