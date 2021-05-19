import React, { useState } from 'https://unpkg.com/es-react/dev';


export default function CoolComponent(props) {
	let [ foo, setFoo ] = useState(0);

	return <div className="cool-component">
		This is a component. foo = {foo}
		<button onClick={() => setFoo(++foo)}>foo++</button>
		<button onClick={() => setFoo(--foo)}>foo--</button>
	</div>	
}