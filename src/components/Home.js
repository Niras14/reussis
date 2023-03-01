import React from 'react';
import { Helmet } from 'react-helmet';
import Scrolltop from './Scrolltop';
import Modal from './Modal';
import Rdesc from './Rightdesc';
import Ldesc from './Leftdesc';
import Cform from './Contactform';
import Footer from './Footer';
import Fbtn from './Floatingbtn';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import icon1 from '../assets/img/banner/icon-1.png';
import icon2 from '../assets/img/banner/icon-2.png';
import icon3 from '../assets/img/banner/icon-3.png';
import bannerimg from '../assets/img/banner/banner-image-2.png';
import bannerimg1 from '../assets/img/banner/banner-image-1.png';
import search from '../assets/img/banner/search-icon.png';
import feature1 from '../assets/img/feature/feature-1.png';
import feature2 from '../assets/img/feature/feature-2.png';
import michael from '../assets/img/author/michael.jpg';
import lian from '../assets/img/author/lian.jpg';
import richard from '../assets/img/author/richard.jpg';
import hcl from '../assets/img/brand/hcl.png';
import iplanet from '../assets/img/brand/iplanet.png';
import himalaya from '../assets/img/brand/himalaya.png';
import manhattan from '../assets/img/brand/manhattan_resource_limited.png';
import media_moment from '../assets/img/brand/media_moment.png';
import mrm from '../assets/img/brand/mrm.png';
import mshs from '../assets/img/brand/mshs.png';
import sattva from '../assets/img/brand/sattva.png';
import nttf from '../assets/img/brand/nttf.png';
import spices from '../assets/img/brand/spices.png';
import cle from '../assets/img/brand/cle.png';
import slv from '../assets/img/brand/slv.png';
import ff from '../assets/img/brand/ff.png';
import quicksand from '../assets/img/brand/quicksand.png';
import threem from '../assets/img/brand/3m.png';
import bayan_resources from '../assets/img/brand/bayan_resources.png';
import tdhousing from '../assets/img/brand/td-housing.png';
import saintgobain from '../assets/img/brand/saint-gobain.png';

const options = {
	margin: 10,
	responsiveClass: true,
	nav: false,
	dots: true,
	autoplay: false,
	navText: ["Prev", "Next"],
	smartSpeed: 1000,
	responsive: {
		0: {
		  items: 1,
		},
		400: {
		  items: 1,
		},
		600: {
		  items: 1,
		},
		700: {
		  items: 1,
		},
		1000: {
		  items: 1,
		}
	},
};

const optionslogo = {
	margin: 10,
	loop:true,
	responsiveClass: true,
	nav: false,
	dots: false,
	autoplay: true,
	navText: ["Prev", "Next"],
	smartSpeed: 1000,
	responsive: {
		0: {
		  items: 2,
		},
		400: {
		  items: 2,
		},
		600: {
		  items: 3,
		},
		700: {
		  items: 4,
		},
		1000: {
		  items: 6,
		}
	},
};

function Home(){
	return(
		<>
			<Helmet>
				
			</Helmet>
			
			<div className="banner">
				<div className="banner_slider">
					<div className="single_slide">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="banner_content text-center">
										<h1>We Are A Global Intelligent <br />Solution Provider</h1>
										<p>Reussis Infotech uses the latest technologies to provide premium software engineering and digital marketing experience. Our solutions react and respond to modern market needs and provide an excellent representation of the quality service. We deliver high impact results that are based on successful methodologies!</p>
										<a href="#" className="btn" data-toggle="modal" data-target="#exampleModalCenter">Request for Proposal</a>
									</div>
								</div>
							</div>
							<div className="banner-images row justify-content-between align-items-end">
								<div className="single-banner-image text-center col-sm-6 d-none d-sm-block">
									<div className="search-icon-box position-absolute"><img src={search} alt="" /></div>
									<img src={bannerimg1} alt="" />
								</div>

								<div className="single-banner-image text-center col-sm-6 d-none d-sm-block">
									<img src={icon1} alt="" className="banner-icon icon-1 fa-spin" />
									<img src={icon2} alt="" className="banner-icon icon-2 fa-spin" />
									<img src={icon3} alt="" className="banner-icon icon-3 fa-spin" />
									<img src={bannerimg} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<section className="pt-140">
				<div className="container">
					<Rdesc 
						rimgsrc={feature1}
						rimgalt="feature1"
						rtitle="Discover the Right way to market your Brand Online"
						rtdesc="Across the globe, we make Digital Marketing more Intelligent in a world of Hybrid Media. We strive to constantly achieve something that is innovative, intelligent, entertaining and solution-centric."
						rdesc="REUSSIS is a Global Digital Communications Agency that specializes in delivering cutting-edge digital solutions. We deliver high-yielding digital campaigns through Social Media, Digital Ads, SEO, PPC, Web Design, Digital Amplification and more. We’ll make sure that we stretch your Ringgit to the maximum by delivering the best results, every single time."
					/>
					<Ldesc 
						limgsrc={feature2}
						limgalt="feature2"
						ltitle="The Right place to build your ideas and transform into Technology"
						ltdesc="Our unique web designing approach garner ideas from clients and craft them into great websites which form compelling interaction avenues for both audiences & search engines. We adopt best breed of technologies in vogue to deliver customisable technology & cost-effective solutions for our clients across the globe."
						ldesc="REUSSIS Infotech was founded in 2006 by visionary executives dedicated to provide total IT solutions under one roof. Since its inception REUSSIS has invested in new technologies, processes and people in order to help its Clients succeed by harnessing the power of evolving technology and Creative Ideas in various domains by solving complex problems."
					/>
				</div>
			</section>
			
			<section className="pb-140">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title text-center">
								<h3 className="h2">Hundreds Of Company Have Gone Through Our <br />
									Services Every Year. Here’s Some Of Their Feedback.</h3>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<OwlCarousel className="testimonial-slider owl-carousel" {...options}>
								<div className="item">
									<div className="single-testimonial text-center">
										<div className="single-testimonial-inner">
											<div className="content">
												<p>You have been a reliable partner in showing up for meetings and delivering as promised. As you went through the learning curve of working with a new framework you naturally had to overcome a number of issues. Despite difficult circumstances you have demonstrated skill and commitment to deliver on time. I am convinced that as we continue our cooperation your professionalism will drive further improvements in the efficiency of your work and the quality of your deliveries. </p>
												<p className="author"><b>Michael Waschnig</b> <span>- Founder, London Business Starter</span></p>
											</div>
											<div className="image">
												<img src={michael} alt="michael" />
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="single-testimonial text-center">
										<div className="single-testimonial-inner">
											<div className="content">
												<p>Reussis met all the requirements of the project and even superseded it, by being very knowledgeable, responsible, corteouse,and very efficient. They where patient with the project and had the goal of satisfying the customer, as a mark that the project is complete. I will go back to them again for a 2nd project because they are the best to work with. All my best!</p>
												<p className="author"><b>Lian Lidia</b> <span>- Curator, Green Papaya Art Projects</span></p>
											</div>
											<div className="image">
												<img src={lian} alt="lian" />
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="single-testimonial text-center">
										<div className="single-testimonial-inner">
											<div className="content">
												<p>Fast on making changes, ensuring that I was satisfied. Great followup as well.Our search team work hand in hand with the Reussis search engine optimization team to bring in some fantastic results in Google</p>
												<p className="author"><b>Richard Young</b><span>- Harvest llyod</span></p>
											</div>
											<div className="image">
												<img src={richard} alt="richard" />
											</div>
										</div>
									</div>
								</div>
							</OwlCarousel>							
						</div>
					</div>
					<div className="row pt-140">
						<div className="col-12">
							<div className="brand-subtitle text-center">
								<h3>We Proudly Worked With</h3>
							</div>							
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<OwlCarousel className="brand-logo owl-carousel" {...optionslogo}>
								<div className="item"><a href="#" className="single-brand-logo"><img src={hcl} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={iplanet} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={himalaya} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={manhattan} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={media_moment} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={mrm} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={mshs} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={sattva} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={nttf} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={spices} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={cle} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={slv} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={ff} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={quicksand} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={threem} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={bayan_resources} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={tdhousing} alt="" /></a></div>
								<div className="item"><a href="#" className="single-brand-logo"><img src={saintgobain} alt="" /></a></div>
							</OwlCarousel>
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

export default Home;