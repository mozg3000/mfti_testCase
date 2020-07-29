import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import {routes} from './router.js';
import logo from './logo.svg';
import './App.css';
import {store} from './store';

function App() {
	// console.log(LoginForm);
  return 	(
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					{routes.map((route, i) => <Route key={i} {...route}/>)}
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
