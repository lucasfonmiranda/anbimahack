import React, { Component } from 'react';
import AppRoutes from './routes';
import './main.css';

class App extends Component {

	render() {
		return(
			<React.Fragment>
				<AppRoutes/>
			</React.Fragment>		
		);
	}
}

export default App;
