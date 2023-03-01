import React from 'react';
import Breadcrumb from './Breadcrumb';
import Scrolltop from './Scrolltop';
import Modal from './Modal';
import Cform from './Contactform';
import Footer from './Footer';
import Fbtn from './Floatingbtn';
import cont from '../assets/img/feature/contact.png';
import coffee from '../assets/img/icon/coffee.png';
import chat from '../assets/img/icon/chat.png';

export default function Contact(){
	return(
		<>
			<Breadcrumb 
				bctile="Locate Us"
			/>
			
			<section className="pb-140">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="contact-form-wrapper">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.47532849638!2d77.51479481159781!3d12.956638306901617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c343d2a238d%3A0x58107911d183aaa3!2sReussis%20Infotech!5e0!3m2!1sen!2sin!4v1622033492399!5m2!1sen!2sin" width="100%" height="400" frameborder="0" style={{ border:0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="mt-50 mt-lg-0">
								<img src={cont} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="pb-110">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title text-center">
								<h2>Come & Visit Our Office</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-sm-6">
							<div className="single-contact-info">
								<h3>Drop by our office for a <img src={coffee} width="36px" alt="icon" /> and <img src={chat} width="36px" alt="icon" /></h3>
								<p>MN Complex, 3, Gnana Bharathi Main Rd, Naagarabhaavi, Bengaluru, Karnataka 560072 </p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-contact-info">
								<h3>Business Phone</h3>
								<p>
									<a href="tel:+91-90360-60214">+91-90360-60214</a> 
									 &nbsp;
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-contact-info">
								<h3>Support Mail</h3>
								<p>
									<a href="mailto:sales@reussis.com">sales@reussis.com</a>
									<a href="mailto:info@reussis.com">info@reussis.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<Modal />
			<Scrolltop />
			<Fbtn />			
			<Cform />			
			<Footer />
		</>
	)
}