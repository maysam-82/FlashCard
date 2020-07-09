import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { reducers } from './redux/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const appStore = createStore(reducers);

ReactDOM.render(
	<Provider store={appStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
