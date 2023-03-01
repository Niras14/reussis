import React from 'react';

/* Web Images */
import hthreem from '../assets/img/portfolio/horizontal/high/3M.jpg';
import hcofe from '../assets/img/portfolio/horizontal/high/cofepopshop.jpg';
import hff from '../assets/img/portfolio/horizontal/high/fine-food.jpg';
import hiplanet from '../assets/img/portfolio/horizontal/high/i-planet.jpg';
import hnttf from '../assets/img/portfolio/horizontal/high/nttf.jpg';
import hpb from '../assets/img/portfolio/horizontal/high/planetbuyer.jpg';

import lthreem from '../assets/img/portfolio/horizontal/low/3m.jpg';
import lcofe from '../assets/img/portfolio/horizontal/low/cofepopshop.jpg';
import lff from '../assets/img/portfolio/horizontal/low/fine-food.jpg';
import liplanet from '../assets/img/portfolio/horizontal/low/i-planet.jpg';
import lnttf from '../assets/img/portfolio/horizontal/low/nttf.jpg';
import lpb from '../assets/img/portfolio/horizontal/low/planetbuyer.jpg';

import hmthreem from '../assets/img/portfolio/vertical/high/3M.jpg';
import hmcofe from '../assets/img/portfolio/vertical/high/cafepopshop.jpg';
import hmff from '../assets/img/portfolio/vertical/high/fine-food.jpg';
import hmiplanet from '../assets/img/portfolio/vertical/high/iplanet.jpg';
import hmnttf from '../assets/img/portfolio/vertical/high/nttf.jpg';
import hmpb from '../assets/img/portfolio/vertical/high/planetbuyer.jpg';

import lmthreem from '../assets/img/portfolio/vertical/low/3M.jpg';
import lmcofe from '../assets/img/portfolio/vertical/low/cafepopshop.jpg';
import lmff from '../assets/img/portfolio/vertical/low/fine-food.jpg';
import lmiplanet from '../assets/img/portfolio/vertical/low/i-planet.jpg';
import lmnttf from '../assets/img/portfolio/vertical/high/nttf.jpg';
import lmpb from '../assets/img/portfolio/vertical/high/planetbuyer.jpg';

/* Mobile Images */
import mhcle from '../assets/img/portfolio/mobile/high/CLE-Pickup.jpg';
import mhcleserv from '../assets/img/portfolio/mobile/high/Cle-Self-Service.jpg';
import mhmshs from '../assets/img/portfolio/mobile/high/MSHS.jpg';
import mhpropalz from '../assets/img/portfolio/mobile/high/ProPalz.jpg';
import mhslv from '../assets/img/portfolio/mobile/high/Secure-Life-Vault.jpg';
import mhtbh from '../assets/img/portfolio/mobile/high/TB-Housing.jpg';

import mlcle from '../assets/img/portfolio/mobile/low/CLE-Pickup.jpg';
import mlcleserv from '../assets/img/portfolio/mobile/low/Cle-Self-Service.jpg';
import mlmshs from '../assets/img/portfolio/mobile/low/MSHS.jpg';
import mlpropalz from '../assets/img/portfolio/mobile/low/ProPalz.jpg';
import mlslv from '../assets/img/portfolio/mobile/low/Secure-Life-Vault.jpg';
import mltbh from '../assets/img/portfolio/mobile/high/TB-Housing.jpg';

export const Webdata = [
	{
		himgsrc  : hthreem,
		limgsrc  : lthreem,
		hmimgsrc : hmthreem,
		lmimgsrc : lmthreem,
		imgalt   : "3m",
		url      : "https://www.3m.com/",
		sitename : "3m"
	},
	{
		himgsrc  : hcofe,
		limgsrc  : lcofe,
		hmimgsrc : hmcofe,
		lmimgsrc : lmcofe,
		imgalt   : "cafepopshop",
		url      : "https://www.cafepopshop.com/",
		sitename : "cafepopshop"
	},
	{
		himgsrc  : hff,
		limgsrc  : lff,
		hmimgsrc : hmff,
		lmimgsrc : lmff,
		imgalt   : "fine food",
		url      : "javascript:;",
		sitename : "Fine foods"
	},
	{
		himgsrc  : hiplanet,
		limgsrc  : liplanet,
		hmimgsrc : hmiplanet,
		lmimgsrc : lmiplanet,
		imgalt   : "IPlanet",
		url      : "https://www.iplanetstore.in/",
		sitename : "IPlanet"
	},
	{
		himgsrc  : hnttf,
		limgsrc  : lnttf,
		hmimgsrc : hmnttf,
		lmimgsrc : lmnttf,
		imgalt   : "NTTF",
		url      : "https://www.nttftrg.com/",
		sitename : "NTTF"
	},
	{
		himgsrc  : hpb,
		limgsrc  : lpb,
		hmimgsrc : hmpb,
		lmimgsrc : lmpb,
		imgalt   : "Planet Buyers",
		url      : "https://www.planetbuyers.com/",
		sitename : "Planet Buyers"
	},
]

export const Mobdata = [
	{
		mhimg  : mhcle,
		mlimg  : mlcle,
		imgalt : "CLE",
		url    : "javascript:;",
		name   : "CLE"
	},
	{
		mhimg  : mhcleserv,
		mlimg  : mlcleserv,
		imgalt : "Cle Self Service",
		url    : "javascript:;",
		name   : "Cle Self Service"
	},
	{
		mhimg  : mhmshs,
		mlimg  : mlmshs,
		imgalt : "mshs",
		url    : "javascript:;",
		name   : "mshs"
	},
	{
		mhimg  : mhpropalz,
		mlimg  : mlpropalz,
		imgalt : "propalz",
		url    : "javascript:;",
		name   : "propalz"
	},
	{
		mhimg  : mhslv,
		mlimg  : mlslv,
		imgalt : "Secure Life Vault",
		url    : "javascript:;",
		name   : "Secure Life Vault"
	},
	{
		mhimg  : mhtbh,
		mlimg  : mltbh,
		imgalt : "TB Housing",
		url    : "javascript:;",
		name   : "TB Housing"
	},
]

export const Webdesign = (props) => {
	return(
		<>
			<div className="col-lg-4 col-md-6 col-xs-6">
				<div className="thumb display-desktop">
					<a href={props.himgsrc} className="fancybox" rel="ligthbox">
						<img src={props.limgsrc} className="zoom img-fluid" alt={props.imgalt} />
					</a>
					<a className="thumb-link" href={props.url} target="_blank">{props.sitename}</a>
				</div>
				<div className="thumb display-mobile">
					<a href={props.hmimgsrc} className="fancybox" rel="ligthbox1">
						<img src={props.lmimgsrc} className="zoom img-fluid" alt={props.imgalt} />
					</a>
					<a className="thumb-link" href={props.url} target="_blank">{props.sitename}</a>
				</div>
			</div>
		</>
	)
}

export const Mobdesign = (props) => {
	return(
		<>
			<div className="col-lg-4 col-md-6 col-xs-6">
				<div className="thumb">
					<a href={props.mhimg} className="fancybox" rel="ligthbox2">
						<img src={props.mhimg} className="zoom img-fluid" alt={props.imgalt} />
					</a>
					<a className="thumb-link" href={props.url}>{props.name}</a>
				</div>
			</div>
		</>
	)
}