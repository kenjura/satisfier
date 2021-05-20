import React, { useState } from 'react';
import getAllParts from '../model/getAllParts';
import { useStore } from '../store';

import './AlternateRecipeList.scss';

export default function AlternateRecipeList(props) {
	const allParts = getAllParts();
	const alternateParts = allParts.filter(part => part.alternate);
	const enabledAlts = useStore(state => state.enabledAlts);
	const setEnabledAlt = useStore(state => state.setEnabledAlt);
	
	return <div id="alternate-recipe-list">
		<table className="alternate-recipe-list">
			<tbody>
			{ alternateParts.map(part => <AlternatePart {...part} 
				key={props.Recipe} 
				enabled={enabledAlts[part.Recipe]} 
				onChange={val => handleChange(part, val)} 
			/>) }
			</tbody>
		</table>	
	</div>;

	function handleChange(part, val) {
		console.log({part, val});
		setEnabledAlt(part.Recipe, val);
	}
}


function AlternatePart(props) {
	return <tr key={ props.Recipe }>
		<td>{ props.Recipe }</td>
		<td>{ props.Output }</td>
		<td><input type="checkbox" checked={props.enabled} onChange={evt => props.onChange(evt.target.checked)} /></td>
	</tr>
}