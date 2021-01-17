import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { pallete } from './variables';
import { AppText } from '../components';

import { image_sources } from '../utility/images';

const Icon = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Image style={props.style} source={props.src} />
		</TouchableOpacity>
	);
};

export const AddIcon = (props) => {
	return (
		<TouchableOpacity style={styles.AddIconStyle} onPress={props.onButtonClick}>
			<Image
				style={{ width: 25, height: 25, tintColor: props.tintColor }}
				source={require('../assets/images/icon-add.png')}
			/>
		</TouchableOpacity>
	);
};

export const BackArrowIcon = (props) => {
	return (
		<TouchableOpacity onPress={props.handleIconClick} style={{ height: 25, width: 25 }}>
			<Image
				style={{
					alignSelf: 'center',
					tintColor: props.tintColor ? props.tintColor : pallete.white,
					height: 15,
					width: 15
				}}
				source={require('../assets/images/icon-back.png')}
			/>
		</TouchableOpacity>
	);
};

export const CancelIcon = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={{ marginLeft: 15 }}>
			<Image
				style={{ width: 18, height: 18, tintColor: 'black' }}
				source={require('../assets/images/icon-cancel.png')}
			/>
		</TouchableOpacity>
	);
};

export const EditIcon = (props) => {
	return <Icon style={{ width: 16, height: 16, tintColor: 'black' }} src={image_sources.editIcon} tintColor="black" />;
};

export const BucketIcon = (props) => {
	return (
		<Icon style={{ width: 16, height: 16, tintColor: '#9B9B9B' }} src={image_sources.bucketIcon} tintColor="#9B9B9B" />
	);
};

export const MoreOptionscon = (props) => {
	return <Icon style={styles.iconOption} src={image_sources.moreIcons} tintColor="#9B9B9B" />;
};

export const GalleryIcon = (props) => {
	return (
		<Icon
			onPress={props.handleIconClick}
			style={styles.galleryIconStyle}
			src={image_sources.galleryIcons}
			tintColor="white"
		/>
	);
};

export const HomeIcons = (props) => {
	let iconUrls = '';
	const { icon } = props;

	if (icon === 'bucket') {
		iconUrls = require('../assets/images/icon-bucket.png');
	} else if (icon === 'imageNote') {
		iconUrls = require('../assets/images/icon-image-note.png');
	} else {
		iconUrls = require('../assets/images/icon-text-note.png');
	}

	return (
		<View style={styles.homeIconStyle}>
			<TouchableOpacity style={styles.homeIconsTextView}>
				<Text> Hi </Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.homeIconView}>
				<Image style={{ width: 12, height: 19 }} source={iconUrls} height={16} width={16} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	homeIconStyle: {
		width: 140,
		flexDirection: 'row',
		marginTop: 20
	},
	homeIconsTextView: {
		flex: 2,
		backgroundColor: pallete.black,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconOption: {
		width: 4,
		height: 16,
		tintColor: 'black',
		marginLeft: 20
	},
	galleryIconStyle: {
		width: 26,
		height: 21,
		tintColor: 'white'
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
	},
	AddIconStyle: {
		backgroundColor: pallete.dark_brown,
		height: 48,
		width: 48,
		borderRadius: 24,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 15,
		marginBottom: 8
	},
	headerIconStyle: {
		marginRight: 10,
		height: 40,
		width: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	GalleryIconStyle: {
		// justifyContent: 'flex-end',
		// alignSelf: 'flex-end',
		// marginRight: 15,
		// marginBottom: 20,
	},
	RightArrowIcon: {
		marginRight: 15,
		marginBottom: 20
	}
});
