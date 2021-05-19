import React, { useState } from 'react';
import getAllParts from '../model/getAllParts.js';

import { useStore } from '../store';

let allParts = getAllParts();

export default function Part(props) {
	let [ qty, setQty ] = useState(props.buildingQty || 1);

	const part = useStore(state => state.parts[props.uid]) || {};
	const changePart = useStore(state => state.changePart);
	const changePartQuantity = useStore(state => state.changePartQuantity);

	return <div className="part">part #{part.uid}
		<select onChange={evt => changePart(props.uid, evt.target.value)} value={part.Recipe}>
			<option>Choose a part</option>
			{
				allParts.map(p => <option key={p.Recipe+p['Output qty/min']}>{p.Recipe}</option>)
			}
		</select>
		<input type="number" default="1" min="0" value={part.buildingQty} onChange={evt => changePartQuantity(props.uid, evt.target.value)} />
	-part</div>	
}
