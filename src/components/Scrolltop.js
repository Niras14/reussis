import React, { useState } from 'react';

const Scrolltop = () =>{
	
	const [isVisible, setIsVisible] = useState(false);
	
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	
	const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener("scroll", toggleVisibility);

	return (
		<>
			{isVisible && 
				<a className="back-to-top" onClick={scrollToTop} ><i className="fa fa-angle-up"></i></a>
			}
		</>
	);
}

export default Scrolltop;
