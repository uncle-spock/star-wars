import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import ItemCard from '../ItemCard/ItemCard';

class ItemDetails extends Component {
	state = {
		item: {},
		imageSection: null,
		isLoading: true
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedItemId !== prevProps.selectedItemId) {
			this.updateItem();
		}
	}

	async updateItem() {
		const { selectedItemId, getData, imageSection } = this.props;

		if (!selectedItemId) {
			// try {
			// 	const item = (await api.getPeople())[0];

			// 	this.setState({
			// 		item,
			// 		isLoading: false
			// 	});

			return;
			// } catch (err) {
			// 	throw new Error(`Oops. Missing update item details: ${err}`);
			// }
		};

		this.setState({
			isLoading: true
		});

		try {
			const item = await getData(selectedItemId);

			this.setState({
				item,
				imageSection,
				isLoading: false
			});
		} catch (err) {
			throw new Error(`Oops. Missing update item details: ${err}`);
		}
	}

	render() {
		const { listPoints } = this.props;
		const { item, imageSection, isLoading } = this.state;

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
