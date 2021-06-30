import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { PostDetails } from './PostDetails';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<Switch>
						<Route path="/post/:id" exact component={PostDetails}></Route>
						<Route path="/" component={Home}></Route>
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
