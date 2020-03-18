import React from 'react';
import App from '../App/App';
import { ApiServiceProvider } from '../ApiServiceContext';
import * as api from '../../services/api/apiService';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => {
	return (
		<ApiServiceProvider value={api}>
			<Router>
				<App />
			</Router>
		</ApiServiceProvider>
	);
}

export default Root;
