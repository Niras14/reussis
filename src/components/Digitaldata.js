import React from 'react';
import icon1 from '../assets/img/icon/icon_1.png';
import icon2 from '../assets/img/icon/icon_2.png';
import icon3 from '../assets/img/icon/icon_3.png';
import icon4 from '../assets/img/icon/icon_4.png';
import icon5 from '../assets/img/icon/icon_5.png';
import icon6 from '../assets/img/icon/icon_6.png';
import icon7 from '../assets/img/icon/icon_7.png';
import icon8 from '../assets/img/icon/icon_8.png';
import icon9 from '../assets/img/icon/icon_9.png';

export const Ddata = [
	{
		imgsrc : icon1,
		imgalt : "icon1",
		title  : "Paid Advertising",
		desc   : "Raise your revenue with effective SEM (Search Engine Marketing). Our certified Google AdWords experts will help you to get maximum ROI with optimum budgets. Apart from Google AdWords, our team also specialized in social media – Facebook/Instagram, YouTube, LinkedIn & programmatic ads."
	},
	{
		imgsrc : icon2,
		imgalt : "icon2",
		title  : "Social Media Marketing",
		desc   : "We will help you to build your social media presence on various platforms such as Facebook, Instagram, Twitter, YouTube, LinkedIn by creating engaging and relevant content through static images, videos, infographics etc. on each post."
	},
	{
		imgsrc : icon3,
		imgalt : "icon3",
		title  : "SEO",
		desc   : "Our SEO - Search Engine Optimization experts will help you to build your organic traffic from hundreds to thousands. We ensure your website shows up on the first page of results from engines like Google & Bing through relevant keywords."
	},
	{
		imgsrc : icon4,
		imgalt : "icon4",
		title  : "Content Marketing",
		desc   : "Content marketing is a digital marketing strategy. Our content strategies are specific to your business and target audience. We do 360-degree content marketing strategy that educates customers, nurtures prospect, and closes sales."
	},
	{
		imgsrc : icon5,
		imgalt : "icon5",
		title  : "Web Analytics",
		desc   : "Our Google Analytics certified individuals will analyse your business & help you determine metrics that define success for your all online campaigns."
	},
	{
		imgsrc : icon6,
		imgalt : "icon6",
		title  : "Email Marketing",
		desc   : "Email marketing remains one of the most effective marketing tools in the digital space. Our e-mail marketing strategies will help you to drive conversions."
	},
	{
		imgsrc : icon7,
		imgalt : "icon7",
		title  : "Affiliate Marketing",
		desc   : "Our affiliate marketing experts build & run effective campaigns on all relevant affiliate networks to generate leads/sales and work on various model such as CPL, CPC, CPM, CPS etc which suits your business."
	},
	{
		imgsrc : icon8,
		imgalt : "icon8",
		title  : "Online Reputation Management",
		desc   : "Our ORM strategies include mix of both social media & SEO strategy that listens, learns, and reacts to steer conversations and engagement in the right direction for your brand."
	},
	{
		imgsrc : icon9,
		imgalt : "icon9",
		title  : "App marketing",
		desc   : "We provide ASO - App Store Optimization and App ads (Downloads) services. We will optimise your app content with relevant keywords to increase your app store ranking and through ads we will also help in increasing app downloads."
	},
]

export const Digitaldata = (props) => {
	return(
		<>
			<div className="col-lg-6">
                <div className="single-service">
                    <div className="icon">
                        <img src={props.imgsrc} className="svg" alt={props.imgalt} />
                    </div>
                    <div className="content">
                        <h3><a>{props.title}</a></h3>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
		</>
	)
}