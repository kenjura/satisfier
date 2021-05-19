import React, { useState } from 'https://unpkg.com/es-react/dev';
import Part from '/components/Part.jsx';

export default function PartList(props) {
	// expected props: parts, addPart

	return <div className="part-list">
		<button onClick={props.addPart}>Add Part</button>

		{ props.parts.map(part => Part(Object.assign({},part,{ changePart:()=>{} }))).join('') }
	</div>	
}