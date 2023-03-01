import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';

const Api = () => {
	
	const [ user, setUser ] = useState([]);
	
	const getApi = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		setUser(await response.json());
	}
	
	useEffect(()=>{
		getApi();
	}, [])
	
	return(
		<>
			<Breadcrumb 
				bctile="Api"
			/>
			
			<section className="pb-110">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title text-center">
								<h2>Api</h2>
								<p>Called dummy api</p>
							</div>
						</div>
					</div>
					<div className="row">
						{
							user.map((curElem)=>{
								const { id, title, body } = curElem;
								return(
									<div className="col-md-6 col-lg-4 mb-4" key={id} >
										<div className="card text-white bg-dark h-100">
											<div className="card-header"><strong> Api {id}</strong></div>
											<div className="card-body">
												<h5 className="card-title">{title}</h5>
												<p className="card-text">{body}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default Api;