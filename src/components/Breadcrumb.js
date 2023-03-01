import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb(props){
	return(
		<>
			<section className="pt-50 pb-50">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="page-title">
								<h2>{props.bctile}</h2>
								<ul className="list-inline">
									<li><Link to="/">Home</Link></li>
									<li>{props.bctile}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}