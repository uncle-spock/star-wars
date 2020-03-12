import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard';

class ItemDetails extends Component {
	render() {
		const { item, imageSection, listPoints } = this.props;

		return (
			<ItemCard
				imageSection={imageSection}
				item={item}
				listPoints={listPoints}
			/>
		);
	}
};

export default ItemDetails;
