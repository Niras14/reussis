import React from 'react';

function Rightdesc(props){
	return(
		<>
			<div className="row justify-content-between align-items-center pb-140">
				<div className="col-lg-5">
					<div className="mb-50 mb-lg-0 text-center">
						<img src={props.rimgsrc} alt={props.rimgalt} />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="section-title style--two">
						<h2>{props.rtitle}</h2>
						<p>{props.rtdesc}</p>
					</div>
					<p>{props.rdesc}</p>
				</div>
			</div>
		</>
	)
}

export default Rightdesc;