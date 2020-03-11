import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import ItemCard from '../ItemCard/ItemCard';

class ItemDetails extends Component {
	render() {
		const { item, imageSection, isLoading, listPoints } = this.props;

		return (
			<div className="card-box with-img">
				{!isLoading ? (
					<ItemCard
						imageSection={imageSection}
						item={item}
						listPoints={listPoints}
					/>
				) : <Loader />}
			</div>
		);
	}
};

export default ItemDetails;
