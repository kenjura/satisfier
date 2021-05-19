import React, { useState } from 'https://unpkg.com/es-react/dev';


export default function Building(props) {
	let [ qty, setQty ] = useState(1);

	return <div className="building">
		<div className="building-recipe">{props.Recipe}</div>
		<div className="building-qty">{props.buildingQty}</div>

	</div>;
}