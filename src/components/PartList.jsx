import React, { useState } from 'react';
import Part from './Part.jsx';

import { useStore } from '../store';

export default function PartList(props) {
	// expected props: parts, addPart

	const parts = useStore(state => state.parts);
	const addPart = useStore(state => state.addPart);
	const calculate = useStore(state => state.calculate);

	return <div className="part-list">
 		{ 
 			Object.entries(parts).map(([k, part]) => <Part uid={part.uid} key={part.uid} />)
 		}
		<button onClick={addPart}>Add Part</button>
		<button onClick={calculate}>Calculate</button>


	</div>	
}
