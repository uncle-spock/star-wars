import React from 'react';

import logoImg from '../../assets/img/logo.png';
import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<img src={logoImg} alt="star wars logo" />
			</div>

			<nav className="nav-box">
				<ul>
					<li className="active">
						<span>Active</span>
					</li>

					<li>
						<span>Link</span>
					</li>

					<li>
						<span>Link</span>
					</li>

					<li>
						<span>link</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
