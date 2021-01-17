import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import { pallete } from '../variables';
import { AppText, StyleConstants, GalleryIcon } from '../index';
import { Container, Item, Input, Label, Form } from 'native-base';

import ModalHeader from '../common/modal-header';
import { useDispatch, useSelector } from 'react-redux';
import { handleSaveBucket, handleOpenBucketModal, toggleGalleryModal } from '../../store/bucket';

const width = Dimensions.get('window').width;

export default function BucketModal(props) {
	const [ bucket_name, setBucketName ] = useState('');

	const dispatch = useDispatch();
	const bucketState = useSelector((state) => state.bucket);

	const { selectedBucketCoverImage } = bucketState;

	const handleBucketSubmit = () => {
		const payload = {
			bucket_name: bucket_name,
			cover_image: selectedBucketCoverImage.URI,
			type: 'child',
			template: 'post',
			parent_bucket_id: null
		};
		dispatch(handleSaveBucket(payload));
	};

	const handleInputChange = (bucket_name) => {
		console.log('asd');
		setBucketName(bucket_name);
	};

	const openGallerySearchModal = () => {
		console.log('asd');
		dispatch(handleOpenBucketModal(false));
		dispatch(toggleGalleryModal(true));
	};

	return (
		<View style={{ marginTop: 22 }}>
			<Modal
				animationType={'slide'}
				transparent={false}
				visible={props.isModalVisible}
				// handler={() => {
				//   props.handleAddBucket();
				// }}
			>
				<ModalHeader
					handleBackPress={props.handleCloseModal}
					handleSubmitPress={handleBucketSubmit}
					titleStyle={{ font: 'RobotoSlab-Regular', size: 16 }}
					title="Create a bucket"
					rightTitle="CREATE"
				/>

				<Container style={{ marginTop: 20 }}>
					<ScrollView>
						<View style={styles.bucketImageStyle}>
							{selectedBucketCoverImage.URI ? (
								<ImageBackground
									imageStyle={{ resizeMode: 'contain' }}
									style={styles.bucketImageStyle}
									source={{
										uri: `${selectedBucketCoverImage.URI}`
									}}
								/>
							) : null}

							<View style={styles.galleryIcon}>
								<GalleryIcon handleIconClick={openGallerySearchModal} />
							</View>
						</View>

						<Form style={{ marginTop: 15, paddingLeft: 5 }}>
							<Item stackedLabel floatingLabel autoCapitalize="words">
								<Label>
									<AppText size="16" color={StyleConstants.pallete.mild_grey}>
										{' '}
										Name this bucket{' '}
									</AppText>
								</Label>

								<Input
									value={bucket_name}
									maxLength={50}
									// style={{ fontFamily: 'NotoSans' }}
									onChangeText={(text) => handleInputChange(text, 'bucket_name')}
								/>
							</Item>

							{/* <View style={styles.characterLimit}>
								{props.data.bucket_name.length > 30 ? (
									<AppText size="12" style={{ color: pallete.darkgrey }}>
										{50 - props.data.bucket_name.length} characters remaining
									</AppText>
								) : null}
							</View> */}

							{/* {props.error.message ? (
              <View style={{ marginTop: 20 }}>
                <Errors errorMessage={props.error.message} />
              </View> 
						) : null}       */}
						</Form>
					</ScrollView>
				</Container>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	bucketImageStyle: {
		backgroundColor: pallete.light_grey,
		height: 255
	},
	galleryIcon: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 0,
		width: 48,
		height: 48,
		borderRadius: 48 / 2,
		backgroundColor: pallete.dark_brown,
		right: 0,
		marginBottom: 10,
		marginRight: 10
	}
});
