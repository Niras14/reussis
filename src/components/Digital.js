import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Ddata, Digitaldata } from './Digitaldata';
import Scrolltop from './Scrolltop';
import Modal from './Modal';
import Cform from './Contactform';
import Footer from './Footer';
import Fbtn from './Floatingbtn';


export default function Digital(){
	return(
		<>
			<Breadcrumb 
				bctile="Digital"
			/>
			<section className="pb-110">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title text-center">
								<h2>Digital Marketing</h2>
								<p>Outrank your competition with tactical social media solutions</p>
							</div>
						</div>
					</div>
					<div className="row">
						{
							Ddata.map((val, ind)=>{
								return <Digitaldata
									key={ind}
									imgsrc={val.imgsrc}
									imgalt={val.imgalt}
									title={val.title}
									desc={val.desc}
								/>
							})
						}
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