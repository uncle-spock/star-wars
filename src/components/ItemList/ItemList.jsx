import React from 'react';

const ItemList = ({
	arrData,
	selectedItemId,
	onItemSelect,
	renderItem
}) => {
	const renderAllItems = arr => {
		if (!arr) return;

		return arr.map(item => {
			const { id, label, additionalInfo } = renderItem(item);

			return (
				<li
					key={id}
					onClick={() => onItemSelect(id)}
					className={id === selectedItemId ? 'selected' : ''}
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
			{renderAllItems(arrData)}
		</ul>
	);
};

export default ItemList;
