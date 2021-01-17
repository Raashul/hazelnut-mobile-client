import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AddIcon } from '../icons';

const { width } = Dimensions.get('window');

export default function AddButton(props) {
	return (
		<View style={styles.addIcon}>
			<AddIcon onButtonClick={props.onAddClick} />
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		flexDirection: 'column',
		position: 'absolute',
		backgroundColor: 'white',
		opacity: 0.95,
		width: width,
		minHeight: 1 * Dimensions.get('window').height
	},
	overlayIconStyles: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		marginRight: 30,
		marginBottom: 0.3 * Dimensions.get('window').height
	},
	addIcon: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		marginBottom: 10,
		marginRight: 10
	}
});
