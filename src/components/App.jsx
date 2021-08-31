import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import PartList from './PartList.jsx';
import AlternateRecipeList from './AlternateRecipeList.jsx';
import BuildingList from './BuildingList.jsx';
import uid from '../helper/uid.js';

let parts = [];
let buildingList = [];

export default function App(props) {
	let [ parts, setParts ] = useState([]);

	return (
		<RecoilRoot>
			<div className="app">
				<PartList />

				<BuildingList buildingList={[]} />

				<AlternateRecipeList />

				{/*<StateDump />*/}
			</div>
		</RecoilRoot>);
}




import { useStore } from '../store';

function StateDump() {
	const state = useStore();

	return <textarea readOnly width="400" value={ JSON.stringify(state) }></textarea>
}