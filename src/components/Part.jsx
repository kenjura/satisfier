import React, { useState } from 'https://unpkg.com/es-react/dev';
import getAllParts from '/model/getAllParts.js';

let allParts = getAllParts();

export default function Part(props) {
	let [ qty, setQty ] = useState(props.buildingQty || 1);

	return <div className="part">
		<select onChange={props.changePart} value={props.Recipe}>
			<option>Choose a part</option>
			{
				allParts.map(part => <option>{part.Recipe}</option>).join('')
			}
		</select>
		<input type="number" default="1" min="0" onChange={evt => setQty(evt.target.value)} />
	</div>	
}