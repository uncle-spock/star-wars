import React from 'react';
import { ApiServiceConsumer } from '../ApiServiceContext';

const withApiService = (Wrapped, mapMethodsToProps) => {
	return props => {
		return (
			<ApiServiceConsumer>
				{api => <Wrapped {...props} mapMethodsToProps={mapMethodsToProps(api)} />}
			</ApiServiceConsumer>
		);
	}
};

export default withApiService;