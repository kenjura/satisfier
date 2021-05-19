import React, { useState } from 'react';
import Part from './Part.jsx';

export default function PartList(props) {
	// expected props: parts, addPart

	return <div className="part-list">
		<button onClick={props.addPart}>Add Part</button>
		There are now {props.parts.length} parts in the list
		{ props.parts.map(part => <Part id={part.id} Recipe={part.Recipe} changePart={part.changePart} key={part.Recipe} />) }
	</div>	
}
