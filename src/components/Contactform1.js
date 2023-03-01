import React from 'react';

export default function Contactform(){
	return(
		<>
			<div id="nb-form">
				<div className="nb-form-header" id="open-form">
					<a href="#" className="d-flex d-block">
						<div><b><i className="fa fa-phone" aria-hidden="true"></i> Contact Us</b> <br /> We will reply as soon as we can</div>
					</a>
				</div>

				<form id="contact-form" method="" action="">
					<input type="text" name="" placeholder="Full Name *" /> 
					<input type="email" name="" placeholder="Email *" />
					<input type="tel" name="" placeholder="Phone" />
					<textarea name="" placeholder="Descriptions*"></textarea>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	)
}