import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AddButton from '../components/home/add-button';
import AddOptions from '../components/home/add-options';
import BucketList from '../components/bucket/bucket-list';
import BucketModal from '../components/bucket/bucket-modal';
import ImageGalleryModal from '../components/common/image-gallery';

import { useDispatch, useSelector } from 'react-redux';
import { handleOpenBucketModal, toggleGalleryModal } from '../store/bucket';

function Home(props) {
	const [ isOptionsVisible, setOptionsVisible ] = useState(false);
	// const [ isBucketModelVisible, setBucketModelVisible ] = useState(false);
	// const [ isImageGalleryModalVisible, setImageGalleryModalVisible ] = useState(false);
	const [ imagesURL, setImageUrls ] = useState([]);

	const dispatch = useDispatch();
	const bucketState = useSelector((state) => state.bucket);
	const { isCreateBucketModalVisible, isImageGalleryModalVisible } = bucketState;

	const handleAddClick = () => {
		setOptionsVisible(!isOptionsVisible);
	};

	const handleBucketIconClick = () => {
		dispatch(openCreateBucketModal({ isCreateBucketModalVisible: true }));

		// setBucketModelVisible(!isBucketModelVisible);
	};

	const handleOverlayClick = () => {
		if (isOptionsVisible) {
			setOptionsVisible(false);
		}
	};

	const handleOptionsClick = (type) => {
		if (type === 'Posts') {
			props.navigation.navigate('Posts');
			return;
		}
		dispatch(handleOpenBucketModal(!isCreateBucketModalVisible));
		// setBucketModelVisible(!isBucketModelVisible);
	};

	const closeImageGalleryModal = () => {
		dispatch(toggleGalleryModal());
	};

	return (
		<View style={styles.container}>
			<BucketList navigation={props.navigation} />
			{isCreateBucketModalVisible ? <BucketModal handleCloseModal={handleOptionsClick} /> : null}

			<AddButton onAddClick={handleAddClick} />
			{isOptionsVisible ? (
				<AddOptions handleOverlayClick={handleOverlayClick} handleIconClick={handleOptionsClick} />
			) : null}
			{isImageGalleryModalVisible ? (
				<ImageGalleryModal value={imagesURL} closeImageGalleryModal={closeImageGalleryModal} />
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: 'black',
		backgroundColor: '#fff'
	}
});

export default Home;
