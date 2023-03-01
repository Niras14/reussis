import React from 'react';

function Modal(){
	return(
		<>
			<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalCenterTitle">Enquire Now</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form id="contact-form" method="POST" action="thank-you.html" enctype="multipart/form-data">
								<div className="form-group">
									<label for="formGroupExampleInput">Full Name</label>
									<input type="text" className="form-control" name="name" placeholder="Full Name" required />
								</div>
								<div className="form-group">
									<label for="exampleFormControlInput1">Email</label>
									<input type="email" className="form-control" name="email" placeholder="name@example.com" required />
								</div>
								<div className="form-group">
									<label for="formGroupExampleInput2">Phone</label>
									<input type="text" className="form-control" name="phone" placeholder="Phone" required />
								</div>
								<div className="form-group">
									<label for="exampleFormControlTextarea1">Product or Service we can help you with *</label>
									<textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" required></textarea>
								</div>
								<input type="hidden" id="utm_source" name="utm_source" value="" />
								<input type="hidden" id="utm_adtype" name="utm_adtype" value="" />
								<input type="hidden" id="utm_campaign" name="utm_campaign" value="" />
								<input type="hidden" id="utm_content" name="utm_content" value="" />
								<input type="hidden" id="utm_medium" name="utm_medium" value="" />
								<input type="hidden" id="page" name="page" value="Homepage" />
								<p className="ajax-message1"></p>
								<div className="form-group">
									<button type="submit" className="btn"><span>Submit</span></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal;