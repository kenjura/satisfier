import React, { useState } from 'react';
import PartList from './PartList.jsx';
import BuildingList from './BuildingList.jsx';
import uid from '../helper/uid.js';

let parts = [];
let buildingList = [];

export default function App(props) {
	let [ parts, setParts ] = useState([]);

	return <div className="app">
		<PartList />

		<BuildingList buildingList={[]} />

		<StateDump />
	</div>
}




import { useStore } from '../store';

function StateDump() {
	const state = useStore();

	return <textarea readOnly width="400" value={ JSON.stringify(state) }></textarea>
}