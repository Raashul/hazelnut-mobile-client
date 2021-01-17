import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Add(props) {
	return (
		<View style={styles.container}>
			<Text>Add Screen </Text>
			<Button title="Go to Home Screen" onPress={() => props.navigation.navigate('Home')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
