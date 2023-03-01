import React from 'react';

function Leftdesc(props){
	return(
		<>
			<div className="row pb-140">
				<div className="col-lg-6">
					<div className="section-title style--two">
						<h2>{props.ltitle}</h2>
						<p>{props.ltdesc}</p>
						<p>{props.ldesc}</p>
					</div>
				</div>
				<div className="col-lg-6 order-first order-lg-last">
					<div className="mb-50 mb-lg-0 text-center">
						<img src={props.limgsrc} alt={props.limgalt} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Leftdesc;