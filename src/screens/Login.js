import React, { useState } from 'react';
import { login } from '../api/authentication';
import EmailForm from '../forms/EmailForm';

const LoginScreen = ({ navigation }) => {
	return <EmailForm onSubmit={login} onAuthentication={() => navigation.navigate('Home')} />;
};

export default LoginScreen;
