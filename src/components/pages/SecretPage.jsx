import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
	if (isLoggedIn) return <h1>This SecretPage only for logged users</h1>;
	return <Redirect to="/login" />;
};

export default SecretPage;
