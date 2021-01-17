import React, { useEffect, useState } from 'react';
import IconBucket from '../assets/images/icon-bucket.png';
//
import { BackArrowIcon, EditIcon, MoreOptionscon } from '../components';

import {
	View,
	SafeAreaView,
	StyleSheet,
	Image,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView
} from 'react-native';

const Posts = () => {
	//Api for post

	// const [isLoading, setLoading] = useState(true);
	// const [data, setData] = useState([]);

	// useEffect(() => {
	//   fetch('api..')
	//     .then((response) => response.json())
	//     .then((json) => setData(json.'apiField'))
	//     .catch((error) => console.error(error))
	//     .finally(() => setLoading(false));
	// }, []);

	return (
		// {isLoading ? <ActivityIndicator/> : (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.heading}>
						<BackArrowIcon tintColor="black" />
						{/* <TouchableOpacity>
							<Image style={styles.iconBack} source={IconBack} />
						</TouchableOpacity> */}
						<View>
							<Text style={styles.title}>Lord of the Rings</Text>
							<View style={styles.subTitle}>
								<Image style={styles.iconBucket} source={IconBucket} />
								<Text style={styles.subTitleText}>Books</Text>
							</View>
						</View>
						<View style={styles.options}>
							<EditIcon />
							<MoreOptionscon />
							{/* <TouchableOpacity>
								<Image style={styles.iconOption} source={IconOption} />
							</TouchableOpacity> */}
						</View>
					</View>
					<View style={styles.line} />
					<Text style={styles.description}>
						It is a gift. A gift to the foes of Mordor. Why not use this ring? Long has my father, the steward of Gondor
						kept the forces of Mordor at bay. By the blood of our people are your lands kept safe! Give Gondor the
						weapon of the enemy. Let us use it against him!
					</Text>
					{/* <View style={styles.notification}>
						<Text style={styles.date}>Posted on 8: 15 PM, March 4</Text>
						<View style={styles.notify}>
							<Image style={styles.iconBell} source={IconBell} />
							<Text style={styles.notificationCount}>4</Text>
						</View>
					</View> */}
				</View>
				{/* <View style={styles.notificationMessageContainer}>
					<Text style={styles.notificationMessage}>This post has appeared in your reminders 4 times.</Text>
				</View> */}
			</ScrollView>
		</SafeAreaView>

		// )}
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	//Header section
	heading: {
		marginTop: 20,
		marginBottom: 10,
		width: 375,
		height: 63,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff'
	},
	iconBack: {
		width: 18,
		height: 18,
		tintColor: 'black',
		marginLeft: 16
	},
	title: {
		width: 'auto',
		height: 21,
		marginLeft: 20,
		color: '#000000',
		// fontFamily: 'Roboto Slab',
		fontSize: 20,
		letterSpacing: 0,
		lineHeight: 21
	},
	subTitle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
		marginTop: 15
	},
	subTitleText: {
		height: 19,
		width: 194,
		color: '#9B9B9B',
		// fontFamily: 'Noto Sans',
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 19,
		marginLeft: 10
	},
	options: {
		width: 30,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	iconBucket: {
		width: 11,
		height: 16,
		tintColor: '#9B9B9B'
	},
	iconEdit: {
		width: 16,
		height: 16,
		tintColor: 'black'
	},
	iconOption: {
		width: 4,
		height: 16,
		tintColor: 'black',
		marginLeft: 20
	},
	//line
	line: {
		width: 400,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 3,
		marginTop: 50
	},
	//description
	description: {
		height: 210,
		width: 335,
		color: '#000000',
		// fontFamily: 'Roboto Slab Light',
		fontSize: 18,
		fontWeight: '300',
		letterSpacing: 0,
		lineHeight: 30,
		alignItems: 'center',
		marginTop: 22
	},
	//posted date
	notification: {
		width: 375,
		height: 63,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 20
	},
	date: {
		height: 17,
		width: 'auto',
		color: '#9B9B9B',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17,
		marginLeft: 20
	},
	notify: {
		width: 48,
		height: 24,
		backgroundColor: '#FAF2E9',
		borderRadius: 10,
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	iconBell: {
		height: 15,
		width: 12,
		tintColor: '#D39967'
	},
	notificationCount: {
		color: '#D39967'
	},
	//notification message box
	notificationMessageContainer: {
		height: 68,
		width: 250,
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
		elevation: 10,
		justifyContent: 'center',
		alignSelf: 'flex-end',
		marginTop: 30,
		marginRight: 20
	},
	notificationMessage: {
		height: 34,
		width: 'auto',
		color: '#9B9B9B',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17,
		textAlign: 'center'
	}
});

export default Posts;
