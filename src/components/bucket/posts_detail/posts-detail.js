import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import IconMore from '../../../assets/images/show-more.png';
import Lord from '../../../assets/images/lord.jpg';

const ScreenWidth = Dimensions.get('screen').width;

const ScreenHeight = Dimensions.get('screen').height;
const DetailViewHeight = ScreenHeight / 2.5;

export default function PostsDetail(props) {
	return (
		<View style={styles.postContainer}>
			<View style={styles.postTime}>
				<Text style={styles.time}>1 hour ago</Text>
				<TouchableOpacity>
					<Image style={styles.iconMore} source={IconMore} />
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.description}>
					A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.
				</Text>
				<Image style={styles.bookImage} source={Lord} />
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	postContainer: {
		height: DetailViewHeight,
		width: ScreenWidth,
		marginTop: 20
	},
	postTime: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20
	},
	time: {
		height: 17,
		width: 62,
		color: '#9B9B9B',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17
	},
	iconMore: {
		height: 18,
		width: 4,
		tintColor: 'black'
	},
	scrollView: {
		marginHorizontal: 20,
		marginTop: 16
	},
	description: {
		height: 72,
		width: 'auto',
		color: '#000000',
		// fontFamily: 'Roboto Slab',
		fontSize: 16,
		fontWeight: '300',
		letterSpacing: 0,
		lineHeight: 24
	},
	bookImage: {
		height: 329,
		width: 'auto',
		borderRadius: 2
	}
});
