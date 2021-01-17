import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { setToken } from '../api/token';
import { Button } from '../components/button/button';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth';

const EmailForm = ({ children, onAuthentication }) => {
	const [ email, onChangeEmail ] = useState('');
	const [ password, onChangePassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');

	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);

	const submit = () => {
		// onAuthentication();
		dispatch(login({ username: 'r', password: 'p' }));
	};

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('.././assets/logo/logomark.png')} />
			<Text style={styles.title}>Welcome back!</Text>
			<Text style={styles.description}>Let’s get you logged in.</Text>
			<View style={styles.form}>
				<View style={styles.inputField}>
					<Text style={styles.inputIndex}>Email</Text>
					<TextInput
						style={styles.inputText}
						placeholder="Email..."
						placeholderTextColor="#4A4A4A"
						onChangeText={(text) => onChangeEmail(text)}
					/>
					<View style={styles.line} />
				</View>
				<View style={styles.inputField}>
					<Text style={styles.inputIndex}>Password</Text>
					<TextInput
						style={styles.inputText}
						placeholder="Password..."
						placeholderTextColor="#4A4A4A"
						secureTextEntry
						onChangeText={(text) => onChangePassword(text)}
					/>
					<View style={styles.line} />
				</View>
			</View>
			<TouchableOpacity>
				<Text style={styles.forgot}>Forgot Password?</Text>
			</TouchableOpacity>
			<Button title="GET STARTED" onPress={submit} />
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			{children}
			<Text style={styles.signUpText}>Not a member? Sign Up</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		width: 48,
		height: 41,
		marginTop: 101,
		marginBottom: 47
	},
	title: {
		width: 'auto',
		height: 38,
		color: '#4D1F03',
		// fontFamily: 'Mermaid Bold',
		fontSize: 32,
		lineHeight: 38,
		marginBottom: 16
	},
	description: {
		width: 'auto',
		height: 19,
		// fontFamily: 'Noto Sans Regular',
		fontSize: 14,
		lineHeight: 19,
		color: '#4A4A4A',
		marginBottom: 65
	},
	form: {
		width: 315
	},
	inputField: {
		marginBottom: 30,
		height: 51
	},
	inputIndex: {
		height: 17,
		lineHeight: 17,
		// fontFamily: 'Noto Sans Regular',
		color: '#AAAAAA',
		fontSize: 12
	},
	line: {
		borderBottomColor: '#AAAAAA',
		borderBottomWidth: 1
	},
	inputText: {
		height: 40,
		lineHeight: 22,
		fontSize: 16
	},
	forgot: {
		height: 17,
		color: '#D39967',
		// fontFamily: 'Noto Sans Regular',
		fontSize: 12,
		lineHeight: 17,
		marginLeft: 243
	},
	signUpText: {
		color: '#D39967',
		fontSize: 13,
		// fontFamily: 'Noto Sans Regular',
		marginTop: 32
	}
});
export default EmailForm;
