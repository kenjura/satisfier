import React, { useState } from 'https://unpkg.com/es-react/dev';
import PartList from '/components/PartList.jsx';
import BuildingList from '/components/BuildingList.jsx';

let parts = [];
let buildingList = [];

export default function App(props) {
	let [ parts, setParts ] = useState([]);

	return <div className="app">
		<PartList parts={parts} addPart={addPart} />

		<BuildingList buildingList={[]} />
	</div>

	function addPart() {
		const newPart = { id:parts.length, Recipe:'' };
		setParts(parts.concat(newPart));
	}
}
