import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
	if (isLoggedIn) return <Redirect to="/" />;

	return (
		<>
			<h1>LoginPage</h1>

			<button
				className="btn btn-warning"
				onClick={onLogin}
			>Login</button>
		</>
	);
};

export default LoginPage;
