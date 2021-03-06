import React, { Component } from 'react';
import Loader from '../Loader/Loader';

const withData = (View) => {
	return class extends Component {
		state = {
			arrData: [],
			isLoading: true
		}

		componentDidMount() {
			this.updateData();
		}

		async updateData() {
			const { mapMethodsToProps } = this.props;
			const { getData } = mapMethodsToProps;

			try {
				const arrData = await getData();

				this.setState({
					arrData,
					isLoading: false
				});
			} catch (err) {
				throw new Error(`Oops. Missing update items list: ${err}`);
			}
		}

		render() {
			const { arrData, isLoading } = this.state;

			return (
				<>
					{!isLoading ? (
						<View
							{...this.props}
							arrData={arrData}
						/>
					) : (
							<div className="card-box with-img">
								<Loader />
							</div>
						)}
				</>
			);
		}
	};
};

export default withData;