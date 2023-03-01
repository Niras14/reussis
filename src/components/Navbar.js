import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/logo-final.png';

function Navbar(){
	return(
		<>
			<header className="header">
				<div className="header-main">
					<div className="container-fluid">
						<div className="row align-items-center main-menu-wrapper justify-content-between">
							<div className="col order-last order-sm-first">
								<div className="main-menu d-flex align-items-center justify-content-end justify-content-sm-start">
									<div className="menu-trigger">
										<span></span>
									</div>
									<div className="nav-wrapper">
										<div id="menu-button" className=""><span></span></div>
										<ul className="nav align-items-center">
											<li><NavLink exact activeClassName="" className="nlink" to="/">Home</NavLink></li>
											<li><NavLink exact activeClassName="" className="nlink" to="/startups">Startups</NavLink></li>
											<li><NavLink exact activeClassName="" className="nlink" to="/digital">Digital</NavLink></li>
											<li><NavLink exact activeClassName="" className="nlink" to="/technology">Technology</NavLink></li>
											<li><NavLink exact activeClassName="" className="nlink" to="/portfolio">Portfolio</NavLink></li>
											<li><NavLink exact activeClassName="" className="nlink" to="/contact">Locate Us</NavLink></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col text-sm-center logo-holder">
								<Link to="/" className="logo"><img src={logo} alt="" /></Link>
							</div>
							<div className="col text-right d-none d-sm-block">
								<ul className="social_icon_list">
									<li><a href="https://www.facebook.com/Reussis.Infotech.PVT.LTD/" target="_blank"><i className="fa fa-facebook"></i></a></li>
									<li><a href="https://www.linkedin.com/company/reussis-infotech-pvt-ltd" target="_blank"><i className="fa fa-twitter"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Navbar;