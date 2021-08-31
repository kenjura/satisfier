import React, { useEffect, useState } from "react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
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

				<DebugObserver />

				{/*<StateDump />*/}
			</div>
		</RecoilRoot>);
}




import { useStore } from '../store';

function StateDump() {
	const state = useStore();

	return <textarea readOnly width="400" value={ JSON.stringify(state) }></textarea>
}

function DebugObserver(): React.Node {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);
  return null;
}