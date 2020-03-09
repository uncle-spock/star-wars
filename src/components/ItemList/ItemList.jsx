import React, { Component } from 'react';
import Loader from '../Loader/Loader';

class ItemList extends Component {
	state = {
		itemsList: [],
		isLoading: true
	}

	componentDidMount() {
		this.updateItemsList();
	}

	async updateItemsList() {
		const { getData } = this.props;

		try {
			const itemsList = await getData();

			this.setState({
				itemsList,
				isLoading: false
			});
		} catch (err) {
			throw new Error(`Oops. Missing update items list: ${err}`);
		}
	}

	renderItems(arr) {
		const { selectedItemId, onItemSelect, renderItem } = this.props;

		return arr.map(item => {
			const { id, label, additionalInfo } = renderItem(item);

			return (
				<li
					key={id}
					onClick={() => onItemSelect(id)}
					className={id === selectedItemId ? 'selected' : ''}
				>
					<div>
						{label}
					</div>

					<small>
						{!!additionalInfo && additionalInfo.map(item => item)}
					</small>
				</li>
			);
		});
	}

	render() {
		const { itemsList, isLoading } = this.state;

		return (
			<ul className="separated-list" >
				{!isLoading ? this.renderItems(itemsList) : <Loader />}
			</ul>
		);
	}
};

export default ItemList;
