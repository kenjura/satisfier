import React, { useState } from 'react';
import getAllParts from '../model/getAllParts.js';

let allParts = getAllParts();

export default function Part(props) {
	let [ qty, setQty ] = useState(props.buildingQty || 1);

	return <div className="part">part-
		<select onChange={evt => props.changePart(props.Recipe, evt.target.value)} value={props.Recipe}>
			<option>Choose a part</option>
			{
				allParts.map(part => <option key={part.Recipe+part['Output qty/min']}>{part.Recipe}</option>)
			}
		</select>
		<input type="number" default="1" min="0" onChange={evt => setQty(evt.target.value)} />
	-part</div>	
}
