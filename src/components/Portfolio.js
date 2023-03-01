import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Webdata, Webdesign, Mobdata, Mobdesign } from './Portfoliodata';
import Scrolltop from './Scrolltop';
import Modal from './Modal';
import Cform from './Contactform';
import Footer from './Footer';
import Fbtn from './Floatingbtn';

export default function Portfolio(){
	return(
		<>
			<Breadcrumb 
				bctile="Portfolio"
			/>
			
			<section className="pb-0">
				<div className="container">
					<div className="row align-items-center pb-140">
						<div className="col-md-12 text-center ">
							<nav className="nav-justified ">
								<div className="nav nav-tabs " id="nav-tab" role="tablist">
									<a className="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Website Design</a>
									<a className="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Mobile App</a>
								</div>
							</nav>
							<div className="tab-content pt-80" id="nav-tabContent">
								<div className="tab-pane fade show active" id="pop1" role="tabpanel" aria-labelledby="pop1-tab">
									<div className="row">
										{
											Webdata.map((val,ind)=>{
												return <Webdesign
													key={ind}
													himgsrc={val.himgsrc}
													limgsrc={val.limgsrc}
													hmimgsrc={val.hmimgsrc}
													lmimgsrc={val.lmimgsrc}
													imgalt={val.imgalt}
													url={val.url}
													sitename={val.sitename}
												/>
											})
										}
									</div>
								</div>
								<div className="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
									<div className="row">
										{
											Mobdata.map((val,ind)=>{
												return <Mobdesign
													key={ind}
													mhimg={val.mhimg}
													mlimg={val.mlimg}
													imgalt={val.imgalt}
													url={val.url}
													name={val.name}
												/>
											})
										}
									</div>
								</div>

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