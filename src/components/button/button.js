import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button(props) {
	const { title, onPress, ...otherProps } = props;
	const onButtonPress = onPress ? onPress : undefined;
	return (
		<TouchableOpacity style={styles.loginButton} onPress={onButtonPress} {...otherProps}>
			<Text style={styles.loginText}>{title}</Text>
		</TouchableOpacity>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	...TouchableOpacity.propTypes
};

const styles = StyleSheet.create({
	loginButton: {
		width: 160,
		height: 40,
		borderRadius: 4,
		backgroundColor: '#D39967',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100
	},
	loginText: {
		width: 'auto',
		height: 19,
		// fontFamily: 'Noto Sans Bold',
		fontSize: 14,
		lineHeight: 19,
		color: '#FFFFFF'
	}
});
