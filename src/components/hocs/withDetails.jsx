import React, { Component } from 'react';
import Loader from '../Loader/Loader';

const withDetails = (View) => {
	return class extends Component {
		state = {
			item: {},
			imageSection: null,
			isLoading: false
		}

		componentDidMount() {
			this.updateData();
		}

		componentDidUpdate(prevProps) {
			if (this.props.selectedItemId !== prevProps.selectedItemId) {
				this.updateData();
			}
		}

		async updateData() {
			const { selectedItemId, imageSection, mapMethodsToProps } = this.props;

			if (!selectedItemId) {
				return;
			};

			this.setState({
				isLoading: true
			});

			const { getData } = mapMethodsToProps;

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
			return (
				<>
					{!this.state.isLoading ? (
						<div className="card-box with-img">
							<View
								{...this.props}
								item={this.state.item}
							/>
						</div>
					) : (
							<div className="card-box with-img">
								<Loader />
							</div>
						)}
				</>
			);
		}
	}
};

export default withDetails;
