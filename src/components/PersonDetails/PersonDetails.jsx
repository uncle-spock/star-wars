import React from 'react';
import personImg from '../../assets/img/r2d2.jpg';
import './person-details.scss';

const PersonalDetails = () => {
	return (
		<div className="card-box with-img">
			<div className="card-img-box">
				<img src={personImg} alt="person" />
			</div>

			<div className="card-content-box">
				<h3>R2-D2</h3>

				<ul className="details-list">
					<li>
						<span className="details-label">Gender:</span>
						<span className="details-value">male</span>
					</li>

					<li>
						<span className="details-label">Birth Year:</span>
						<span className="details-value">43</span>
					</li>

					<li>
						<span className="details-label">Eye color:</span>
						<span className="details-value">red</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PersonalDetails;
