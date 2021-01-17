import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

import BucketDetail from '../components/bucket/buckets_detail/buckets-detail';
import PostsDetail from '../components/bucket/posts_detail/posts-detail';

import bookImage from '../assets/images/book.jpg';
import IconBell from '../assets/images/icon-bell-active.png';
import IconPin from '../assets/images/icon-pin.png';
import IconEdit from '../assets/images/icon-edit.png';
import IconMore from '../assets/images/show-more.png';
import IconBack from '../assets/images/icon-back.png';
import IconSearch from '../assets/images/icon-search.png';

const ScreenWidth = Dimensions.get('screen').width;
const LineWidth = ScreenWidth - 40;

const ScreenHeight = Dimensions.get('screen').height;
const DetailViewHeight = ScreenHeight / 2.5;

export default function Bucket(props) {
	// const BucketButtonColor = '#000000';
	// const PostsButtonColor = '#9B9B9B';

	const [ BucketButtonColor, setBucketButtonColor ] = useState('#000000');
	const [ PostsButtonColor, setPostsButtonColor ] = useState('#9B9B9B');

	const [ isButtonClick, setButtonClick ] = useState(true);

	function onBucketButtonPress() {
		setButtonClick(true);
		setBucketButtonColor('#000000');
		setPostsButtonColor('#9B9B9B');
	}
	function onPostsButtonPress() {
		setButtonClick(false);
		setBucketButtonColor('#9B9B9B');
		setPostsButtonColor('#000000');
	}

	const goBack = () => {
		props.navigation.navigate('Home');
	};

	return (
		<ScrollView>
			<ImageBackground source={bookImage} style={styles.coverImage}>
				<View style={styles.icons}>
					<TouchableOpacity onPress={goBack}>
						<Image style={styles.iconBack} source={IconBack} />
					</TouchableOpacity>

					<View style={styles.subIcons}>
						<TouchableOpacity>
							<Image style={styles.commonIcon} source={IconPin} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Image style={styles.commonIcon} source={IconEdit} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Image style={styles.iconMore} source={IconMore} />
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
			<View style={styles.container}>
				<View style={styles.headingContainer}>
					<Text style={styles.title}>Books</Text>
					<Text style={styles.engagement}>12 Posts . Shared</Text>
				</View>
				<View style={styles.line} />
				{/* <View style={styles.notificationContainer}>
					<View style={styles.notificationContent}>
						<View style={styles.iconContainer}>
							<Image style={styles.iconBell} source={IconBell} />
						</View>
						<View style={styles.duration}>
							<Text style={styles.time}>Daily - Mornings</Text>
							<Text style={styles.timeMessage}>You’re getting posts from this bucket every morning.</Text>
						</View>
					</View>
					<TouchableOpacity>
						<Text style={styles.change}>CHANGE</Text>
					</TouchableOpacity>
				</View> */}
			</View>
			<View style={styles.detailContainer}>
				<View style={styles.detailOptions}>
					<TouchableOpacity onPress={onBucketButtonPress}>
						<Text style={[ { color: BucketButtonColor }, styles.optionBucket ]}>Buckets</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={onPostsButtonPress}>
						<Text style={[ { color: PostsButtonColor }, styles.optionDetail ]}>Posts</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Image style={styles.iconSearch} source={IconSearch} />
				</TouchableOpacity>
			</View>
			<View style={styles.detailLine} />
			<View style={{ height: DetailViewHeight }}>{isButtonClick ? <BucketDetail /> : <PostsDetail />}</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	coverImage: {
		height: 224,
		width: ScreenWidth
	},
	// cover pic icons
	icons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 51
	},
	subIcons: {
		flex: 0,
		flexDirection: 'row'
	},
	iconBack: {
		height: 18,
		width: 18,
		tintColor: '#FFFFFF',
		marginLeft: 16
	},
	commonIcon: {
		height: 16,
		width: 16,
		marginRight: 20
	},
	iconMore: {
		height: 16,
		width: 4,
		marginRight: 20
	},
	//Details
	container: {
		height: 120,
		width: ScreenWidth,
		backgroundColor: '#36334A'
	},
	headingContainer: {
		marginTop: 20,
		marginLeft: 20
	},
	title: {
		height: 28,
		width: 'auto',
		color: '#FFFFFF',
		// fontFamily: 'Mermaid',
		fontSize: 22,
		fontWeight: 'bold',
		letterSpacing: 0,
		lineHeight: 28
	},

	engagement: {
		height: 17,
		width: 'auto',
		color: 'rgba(255,255,255,0.6)',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17
	},

	//line
	line: {
		width: LineWidth,
		borderBottomColor: 'rgba(0,0,0,0.14)',
		borderBottomWidth: 2,
		marginTop: 15,
		marginLeft: 20
	},
	//notification container
	notificationContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 20
	},
	notificationContent: {
		flex: 1,
		flexDirection: 'row'
	},
	//icon
	iconContainer: {
		height: 40,
		width: 40,
		borderRadius: 24,
		backgroundColor: 'rgba(0,0,0,0.25)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconBell: {
		height: 20,
		width: 19
	},
	//notification timing
	duration: {
		marginLeft: 10
	},
	time: {
		height: 18,
		width: 107,
		color: '#FFFFFF',
		// fontFamily: 'Noto Sans',
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 0,
		lineHeight: 18
	},
	timeMessage: {
		height: 34,
		width: 220,
		color: 'rgba(255,255,255,0.75)',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17
	},
	//change button
	change: {
		height: 17,
		width: 51,
		color: '#D39967',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		fontWeight: 'bold',
		letterSpacing: 0,
		lineHeight: 17,
		marginRight: 20,
		bottom: -20,
		alignSelf: 'flex-end'
	},
	//Detail container
	detailContainer: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 15
		// marginBottom: 20,
	},
	detailOptions: {
		flex: 1,
		flexDirection: 'row'
	},
	optionBucket: {
		height: 19,
		width: 52,
		// color: BucketButtonColor,
		// fontFamily: 'Noto Sans',
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 19,
		marginRight: 20
	},
	optionDetail: {
		height: 19,
		width: 52,
		// color: PostsButtonColor,
		// fontFamily: 'Noto Sans',
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 19,
		marginRight: 20
	},
	iconSearch: {
		height: 16,
		width: 16
	},
	// detail tab line
	detailLine: {
		width: LineWidth,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 3,
		marginTop: 12
	}
});
