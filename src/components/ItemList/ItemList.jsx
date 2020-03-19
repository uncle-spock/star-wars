import React from 'react';

const ItemList = ({
	arrData,
	onItemSelect,
	renderItem,
	selectedItemId
}) => {
	const renderAllItems = arr => {
		return arr.map(item => {
			const { id, label, additionalInfo } = renderItem(item);

			return (
				<li
					key={id}
					onClick={() => onItemSelect(id)}
					className={selectedItemId === id ? 'selected' : ''}
				>
					<strong>{label} </strong>
					<small>
						{!!additionalInfo && additionalInfo.map(item => item)}
					</small>
				</li>
			);
		});
	};

	return (
		<ul className="separated-list" >
			{!!arrData ? renderAllItems(arrData) : <span>No items</span>}
		</ul >
	);
};

export default ItemList;
