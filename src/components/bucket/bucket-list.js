import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { AppText } from '../index';
import { pallete } from '../variables';
import { getParentBuckets } from '../../store/bucket';
import { useDispatch, useSelector } from 'react-redux';

const width = Dimensions.get('window').width;

export default function BucketList(props) {
	const dispatch = useDispatch();
	const bucketState = useSelector((state) => state.bucket);

	const { primaryBuckets } = bucketState;

	const handleBucketClick = () => {
		props.navigation.navigate('Bucket');
	};

	useEffect(
		() => {
			const loadPrimaryBuckets = async () => {
				await dispatch(getParentBuckets());
			};
			loadPrimaryBuckets();
		},
		[ primaryBuckets ]
	);

	return (
		<View>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				{primaryBuckets.map((bucket, i) => (
					<TouchableOpacity onPress={handleBucketClick}>
						<ImageBackground
							imageStyle={{ borderRadius: 8 }}
							style={styles.card}
							source={{
								uri: bucket.cover_image
							}}
						/>

						<View style={{ alignItems: 'center' }}>
							<View style={{ alignItems: 'center', width: width / 2 - 15 }}>
								<AppText font="RobotoSlab-Regular" color="#4A4A4A">
									{bucket.bucket_name}
								</AppText>
							</View>
							<AppText style={styles.listTextStyle}>
								{' '}
								{bucket.number_of_child_buckets} buckets || {bucket.number_of_posts} posts
							</AppText>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	listTextStyle: {
		fontSize: 10,
		color: pallete.darkgrey
	},
	listView: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	card: {
		width: width / 2 - 15,
		height: 160,
		marginLeft: 10,
		marginTop: 10
	},
	settingsViewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5,
		paddingLeft: 10,
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: pallete.light_grey
	}
});
