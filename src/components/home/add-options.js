import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { AddIcon } from '../../components';
import { pallete } from '../variables';

const { width } = Dimensions.get('window');

export default function addOptions(props) {
	return (
		<View style={styles.overlay}>
			<TouchableOpacity style={{ flex: 1 }} onPress={props.handleOverlayClick} />
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}
			>
				<TouchableOpacity style={{ flex: 1 }} onPress={props.handleOverlayClick} />
				<View style={styles.overlayIconStyles}>
					<View style={styles.homeIconStyle}>
						<TouchableOpacity style={styles.homeIconsTextView} onPress={() => props.handleIconClick('Bucket')}>
							<Text style={{ color: 'white' }}>Bucket</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.homeIconView} onPress={() => props.handleIconClick('Bucket')}>
							<Image style={{ width: 12, height: 19 }} source={require('../../assets/images/icon-bucket.png')} />
						</TouchableOpacity>
					</View>

					<View style={styles.homeIconStyle}>
						<TouchableOpacity style={styles.homeIconsTextView} onPress={() => props.handleIconClick('Posts')}>
							<Text style={{ color: 'white' }}>Text</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.homeIconView} onPress={() => props.handleIconClick('Posts')}>
							<Image style={{ width: 12, height: 19 }} source={require('../../assets/images/icon-bucket.png')} />
						</TouchableOpacity>
					</View>

					<View style={styles.homeIconStyle}>
						<TouchableOpacity style={styles.homeIconsTextView} onPress={() => props.handleIconClick('Bucket')}>
							<Text style={{ color: 'white' }}>Image</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.homeIconView} onPress={() => props.handleIconClick('Bucket')}>
							<Image style={{ width: 12, height: 19 }} source={require('../../assets/images/icon-bucket.png')} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
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
	homeIconStyle: {
		width: 140,
		flexDirection: 'row',
		marginTop: 20
	},
	overlayIconStyles: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		marginRight: 40,
		marginBottom: 0.25 * Dimensions.get('window').height
	},
	homeIconsTextView: {
		flex: 2,
		backgroundColor: pallete.black,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	homeIconView: {
		marginLeft: 10,
		flex: 1,
		width: 36,
		height: 36,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: pallete.dark_brown
	}
});
