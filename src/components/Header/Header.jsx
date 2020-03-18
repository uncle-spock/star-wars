import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/logo.png';
import './header.scss';

// const menuItems = [
// 	'People',
// 	'Starships',
// 	'Planet'
// ];

class Header extends Component {
	// state = {
	// 	activeItemIndex: 0
	// }

	// handleClick(index) {
	// 	this.setState({
	// 		activeItemIndex: index
	// 	});
	// }

	// renderItems() {
	// 	return menuItems.map((item, index) => {
	// 		return (
	// 			<li key={item} onClick={() => this.handleClick(index)} className={index === this.state.activeItemIndex ? 'active' : ''}>
	// 				<Link to="/people">{item}</Link>
	// 			</li>
	// 		);
	// 	});
	// }

	render() {
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
							<Link to="/people">People</Link>
						</li>

						<li>
							<Link to="/planets">Planets</Link>
						</li>

						<li>
							<Link to="/starships">Starships</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
};

export default Header;
