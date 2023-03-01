import React from 'react';
import enquiry from '../assets/img/icon/enquiry.png';

export default function Floatingbtn(){
	return(
		<>
			<div className="float bounce-1" data-toggle="modal" data-target="#exampleModalCenter">
				<img src={enquiry} alt="icon" />
			</div>
		</>
	)
}