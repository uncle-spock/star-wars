import React, { Component } from 'react';

import logoImg from '../../assets/img/logo.png';
import './header.scss';

const menuItems = [
	'People',
	'Starships',
	'Planet'
];

class Header extends Component {
	state = {
		activeItemIndex: 0
	}

	handleClick(index) {
		this.setState({
			activeItemIndex: index
		});
	}

	renderItems() {
		return menuItems.map((item, index) => {
			return (
				<li key={item} onClick={() => this.handleClick(index)} className={index === this.state.activeItemIndex ? 'active' : ''}>
					<span>{item}</span>
				</li>
			);
		});
	}

	render() {
		return (
			<header className="header">
				<div className="logo">
					<img src={logoImg} alt="star wars logo" />
				</div>

				<nav className="nav-box">
					<ul>
						{this.renderItems()}
					</ul>
				</nav>
			</header>
		);
	}
};

export default Header;
