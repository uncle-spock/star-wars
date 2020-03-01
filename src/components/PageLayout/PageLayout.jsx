import React from 'react';
import Header from '../Header/Header'

import './page-layout.scss';

const PageLayout = ({
	children
}) => {
	return (
		<>
			<Header />

			<div className="page-content">
				{children}
			</div>
		</>
	);
};

export default PageLayout;
