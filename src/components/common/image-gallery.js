import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import { pallete } from '../variables';
import { StyleConstants, AppText } from '../index';
import { Input } from 'native-base';

import ModalHeader from '../common/modal-header';
import { toggleGalleryModal, handleBucketCoverImageSelect, handleOpenBucketModal } from '../../store/bucket';
import { useDispatch, useSelector } from 'react-redux';

import * as unsplashApi from '../../api/unsplash';

const width = Dimensions.get('window').width;

export default function ImageGallery(props) {
	const dispatch = useDispatch();

	let imageURLs = props.value.map((img, index) => ({
		URI: img.URI,
		thumbnail: img.thumbnail,
		id: String(index)
	}));

	const [ imageSearchKeyword, setImageSearchKeyword ] = useState('');
	const [ unsplashImages, setUnsplashImages ] = useState([]);
	const [ isImageSearched, setImageSearched ] = useState([]);

	const onSearchTextChange = (text) => {
		setImageSearched(false);
		setImageSearchKeyword(text);
	};

	const onSearchImage = () => {
		const payload = {
			query: imageSearchKeyword
		};
		let imagesReturned = [];
		unsplashApi
			.searchWithKeyword(payload)
			.then((res) => {
				if (res.data.results.length > 0) {
					res.data.results.map((url, i) => {
						imagesReturned.push({
							id: i,
							URI: url.urls.regular,
							thumbnail: url.urls.regular
						});
					});
					setImageSearched(imagesReturned);
				} else {
					setImageSearched(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const closeImageGalleryModal = () => {
		dispatch(toggleGalleryModal(false));
	};

	const handleImageClick = (selectedImage) => {
		dispatch(handleBucketCoverImageSelect(selectedImage));
	};

	return (
		<View>
			<Modal animationType="none" transparent={false}>
				<ModalHeader title="Photos by unsplash" noRight handleBackPress={closeImageGalleryModal} />
				<View
					style={{
						marginTop: 15,
						paddingLeft: 5,
						height: 50,

						borderWidth: 1,
						borderColor: StyleConstants.pallete.light_grey,
						marginLeft: 5,
						marginRight: 5,
						borderRadius: 8
					}}
				>
					<Input
						onChangeText={(text) => onSearchTextChange(text)}
						onEndEditing={onSearchImage}
						placeholder="Enter keyword to search"
					/>
					{/* <Textarea multiline = {false}  style={{marginLeft:20, flex:1, marginTop: 5}} placeholder='Type In Your Keyword' onChangeText={(text)=>props.onSearchTextChange(text)}/> */}
					<TouchableOpacity style={styles.searchIcon} onPress={props.onSearchImage}>
						<Image style={{ height: 20, width: 20 }} source={require('../../assets/images/icon-search.png')} />
					</TouchableOpacity>
				</View>

				{isImageSearched.length > 0 ? (
					<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
						{isImageSearched.map((unsplashImage, i) => (
							<TouchableOpacity style={{ height: 200, width: '33%' }} onPress={() => handleImageClick(unsplashImage)}>
								<Image style={{ height: 200, width: '100%' }} source={{ uri: unsplashImage.URI }} />
							</TouchableOpacity>
						))}
					</View>
				) : (
					<View
						style={{
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<AppText size={14}>No images available for the searched text.</AppText>
						<AppText size={14}>Try using different search name.</AppText>
					</View>
				)}
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	searchIcon: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 0,
		height: 20,
		width: 20,
		right: 8,
		paddingRight: 10,
		marginBottom: 10
	}
});
