import React, { Component } from 'react';
import Loader from '../Loader/Loader';

const withDetails = (View, getData) => {
	return class extends Component {
		state = {
			item: {},
			imageSection: null,
			isLoading: true
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
			const { selectedItemId, imageSection, api } = this.props;

			if (!selectedItemId) {
				return;
			};

			this.setState({
				isLoading: true
			});

			try {
				const item = await api[getData](selectedItemId);

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
