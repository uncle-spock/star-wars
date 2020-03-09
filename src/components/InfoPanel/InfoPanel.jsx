import React from 'react';

const InfoPanel = ({
	leftBlock,
	rightBlock
}) => {
	return (
		<div className="row">
			<div className="col-12 col-md-6">
				{leftBlock}
			</div>

			<div className="col-12 col-md-6">
				{rightBlock}
			</div>
		</div>
	);
};

export default InfoPanel;
