import React from 'react';
import './loader.scss';
import { ReactComponent as LoaderImg } from '../../assets/img/loader.svg';

const Loader = () => {
	return (
		<div className="loader-holder">
			<LoaderImg />
		</div>
	);
};

export default Loader;