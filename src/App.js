import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Startups from './components/Startups';
import Digital from './components/Digital';
import Technology from './components/Technology';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Api from './components/Api';
import './assets/css/App.css';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/startups" component={Startups} />
					<Route exact path="/digital" component={Digital} />
					<Route exact path="/technology" component={Technology} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/api" component={Api} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
