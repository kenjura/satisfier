import React, { useState } from 'react';
import PartList from './PartList.jsx';
import BuildingList from './BuildingList.jsx';

let parts = [];
let buildingList = [];

export default function App(props) {
	let [ parts, setParts ] = useState([]);

	return <div className="app">
		<PartList parts={parts} addPart={addPart} />

		<BuildingList buildingList={[]} />
	</div>

	function addPart() {
		const newPart = { id:parts.length, Recipe:'', changePart };
		setParts(parts.concat(newPart));
	}

	function changePart(a,b,c) {
		console.log({a,b,c});
	}
}
