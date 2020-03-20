import React from 'react';
import { Link } from 'react-router-dom';

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
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/people/">People</Link>
					</li>

					<li>
						<Link to="/planets/">Planets</Link>
					</li>

					<li>
						<Link to="/starships/">Starships</Link>
					</li>

					<li>
						<Link to="/login">Login</Link>
					</li>

					<li>
						<Link to="/secret">Secret</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
