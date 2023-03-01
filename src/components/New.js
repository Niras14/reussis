import React, { useState } from "react";

function New(){
	const [active, setActive] = useState(false);
	return(
		<div className="mt-5">
			<button onClick={ () => setActive(!active)}>
				{active ? "X" : "Menu"}
			</button>
			<div className={active ? "tog active" : "tog"}>
				<h3>Toggle Div</h3>
			</div>
		</div>
	)
}

export default New;