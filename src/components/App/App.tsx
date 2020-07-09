import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import StackPage from '../../pages/StackPage';
import Header from '../Header';
import './app.css';

const App = () => {
	return (
		<div className="container">
			<Header />
			<div className="pages p-2">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/stack" component={StackPage} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
