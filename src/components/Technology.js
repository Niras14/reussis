import React from 'react';
import Breadcrumb from './Breadcrumb'
import Ldesc from './Leftdesc';
import Rdesc from './Rightdesc';
import Modal from './Modal';
import Cform from './Contactform';
import Scrolltop from './Scrolltop';
import Footer from './Footer';
import Fbtn from './Floatingbtn';
import uiux from '../assets/img/feature/ui_ux.png';
import ecommercesolu from '../assets/img/feature/ecommerce_solution.png';
import mobappdev from '../assets/img/feature/mobile_app_development.png';
import eapp from '../assets/img/feature/enterprise_appilication.png';
import digfuture from '../assets/img/feature/digital_future.png';


export default function Technology(){
	return(
		<>
			<Breadcrumb 
				bctile="Technology"
			/>
			
			<section className="pt-3">
				<div className="container">
					<Rdesc 
						rimgsrc={uiux}
						rimgalt="uiux"
						rtitle="UI/UX"
						rtdesc="We have the vision, experience and knowledge to mobilize websites and apps in the connected digital world which create lasting impressions. Our design ideas are always focused on creating clear and clutter free designs focusing on the content and navigation flow. Our UI/UX Design Process Flow includes - Research and Brainstorm, UI Wireframes, Visual mockup’s and Prototype."
						rdesc=""
					/>
					<Ldesc 
						limgsrc={ecommercesolu}
						limgalt="ecommerce solution"
						ltitle="E-Commerce Solution"
						ltdesc="As one of the leading E-Commerce Web Development Company we create ecommerce websites which not only sell well but help Integrated solutions. Cataloguing your product page and integrate with Google Analytics, FB Pixel for social retargeting, Integration of WhatsApp for Business APIs, Compatible for Affiliate Marketing, Integration with Marketplace like Amazon, Lazada, Zalora, etc. Thus pushing your basic ecommerce website to an extra mile. Get ready to boost your sales."
						ldesc="We have successfully designed and coded numerous E-Commerce portals delivering scale-able omni channel digital assets which successfully translate into ultimate selling machines. We have capabilities in open source platforms like Magento, OpenCart, Woo-Commerce, PrestaShop, Codeigniter, Drupal, etc. Our Mobile App team goes an extra mile to develop app if required for a business."
					/>
					<Rdesc 
						rimgsrc={mobappdev}
						rimgalt="mobappdev"
						rtitle="Mobile App Development"
						rtdesc="How about a place in Apple App Store, and Google Play Store? Our mobile app developers can build the mobile app to your requirement, in your budget and as per your timeline. We have a team of mobile app developers which assure that the resulting product is as great as the team that made it. We have helped lot of award winning startups build their ideas with us. Share your ideas with our expertise and leave the rest with us. Let it be Native based or Hybrid, IOS or android, leave it with us, we just want you sounding your ideas."
						rdesc="We have worked with HR Research Labs, Digital Vault Companies, Social Networking, College and School Alumni Applications, Laundry Solutions, Food Chain, Real-estate Companies, E-commerce sectors, Etc."
					/>
					<Ldesc 
						limgsrc={eapp}
						limgalt="Enterprise Application"
						ltitle="Enterprise Application"
						ltdesc="We help converting Enterprise operation to Cloud based Digital Platform. Making Business More Efficient With Enterprise Application Development. We also develop Mobile Apps for Internal Operations to improve data integrity, Instant access, Supply Chain Control. This further increases overall efficiency, operations and control."
						ldesc="Benefits of Enterprise Applications are Increase accessibility, Transforming live data, Supply Chain Control, Access only certain logs sheets based on department and CUGs. Different apps for Employee Levels, Department Levels for data integrity and security. We have worked with Automobile Industry, Lighting Solution Industry, Power Plant, Coal Mining Company, Most of our clients hailing from South East Asian Countries."
					/>
					<Rdesc 
						rimgsrc={digfuture}
						rimgalt="digital future"
						rtitle="Stepping into the Digital Future with IoT"
						rtdesc="It’s estimated that by 2021 there will be at least 20 billion things(Devices) connected to the Internet, or about three items per person. Transforming all traditional mechanical device smartly connected to Internet will further increase your profit and decision making. The smarter the more Lazy. The day is nearing to book return tickets to Mars. Did our forefathers ever dream about pacemakers controlling, signalling and recording your heartbeat."
						rdesc="We have developed Smart Electricity Meter for Energy companies in South Africa, Saudi Arabia. Public WiFi Hotspots for Tourism Industries, Shopping Malls, Retail Chains in India, Wifi Integrated Smart Commercial laundry machines, that replaces leading traditional coin operated laundry machines with our IOT device converts to smart device."
					/>
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