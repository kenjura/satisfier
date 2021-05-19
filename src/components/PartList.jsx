import React, { useState } from 'react';
import Part from './Part.jsx';

import { useStore } from '../store';

export default function PartList(props) {
	// expected props: parts, addPart

	const parts = useStore(state => state.parts);
	const addPart = useStore(state => state.addPart);

	return <div className="part-list">
		<button onClick={addPart}>Add Part</button>
		There are now {parts.length} parts in the list
 		{ 
 			Object.entries(parts).map(([k, part]) => <Part uid={part.uid} key={part.uid} />)
 		}

	</div>	
}
