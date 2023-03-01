import React from 'react';
import { Helmet } from 'react-helmet';
import Scrolltop from './Scrolltop';
import Breadcrumb from './Breadcrumb'
import Ldesc from './Leftdesc';
import Modal from './Modal';
import Cform from './Contactform';
import Footer from './Footer';
import Fbtn from './Floatingbtn';

import about from '../assets/img/feature/about-1.png';
import whyreussis from '../assets/img/feature/about-2.png';

export default function Startups(){
	return(
		<>
			<Helmet>
				
			</Helmet>
			
			<Breadcrumb 
				bctile="Startups"
			/>
			
			<section className="pb-140">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<div className="section-title mb-3">
								<h1>Idea Bucket and Eligibility</h1>
							</div>
						</div>
					</div>
					<Ldesc 
						limgsrc={about}
						limgalt="about"
						ltitle="Get a chance to join our start-up incubation."
						ltdesc="our dream deserves more than a place in your imagination. How about a chance to win Best Start-up Awards. We have helped lot of award winning start-ups build their ideas with us. Share your ideas with our expertise and leave the rest with us."
						ldesc="We are a team of enthusiast right from Web Technology, Mobile Apps, IOTs, Business Analyst, Business Strategist, Sales and Marketing. If your ideas sounds interesting, you get a chance to work with our team. We help right from building your ideas, transforming to a product, market, sale and create WOW. We pick few interesting start-ups to get a chance to win 1yr Free Cloud Hosting, Google AdSense and FB Ad credits completely incentivised by us. Also our Business strategist will help you in pitching the product with Investors and VCs. "
					/>
					<div className="row">
						<div className="col-lg-6">
							<div className="section-title mb-3">
								<h2>Why REUSSIS….???</h2>
							</div>
							<p>Reussis Infotech provides you cost effective Digital & Tech solutions, that will help you to stay competitive in the market.</p>
							<p>We build exactly what you want with guaranteed costs and all your timings before you start.</p>
							<ul className="list-check">
								<h6>Costs and timings upfront</h6>
								<li>Building what you need on time and complete on approved budget.</li>
								<h6>Simple and Personalised</h6>
								<li>Software as easy as ordering pizza. No technical knowledge needed. You can build any idea with help from our experts.</li>
								<h6>Code you can rely on</h6>
								<li>Coding are done with rigorous testing in place, which means all are developed & tested that will work smoothly.</li>
							</ul>
						</div>
						<div className="col-lg-6 order-lg-first">
							<div className="mt-50 mt-lg-0">
								<img src={whyreussis} alt="" />
							</div>
							<ul className="list-check">
								<h6>Stay completely in control</h6>
								<li>Tracking and amendments, Software support anytime.</li>
							</ul>
						</div>
						<p>Post us your Ideas and leave the rest with us. Just have to email us (info@reussis.com) or fill the form.</p>
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