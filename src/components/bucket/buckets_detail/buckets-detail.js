import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Lord from '../../../assets/images/lord.jpg';
import faultBook from '../../../assets/images/fault-book.jpg';
import catcherBook from '../../../assets/images/catcher-book.jpg';
import adventureBook from '../../../assets/images/adventure.jpg';
import IconPost from '../../../assets/images/icon-posts.png';

export default function BucketDetail(props) {
	return (
		<View>
			<ScrollView style={styles.scrollView}>
				<View style={styles.details}>
					<View style={styles.detailsCard}>
						<Image style={styles.bookCover} source={Lord} />
						<Text style={styles.bookTitle}>Lord of the Rings</Text>
						<View style={styles.bookPostsDetail}>
							<Image style={styles.icon} source={IconPost} />

							<Text style={styles.bookPosts}>6 Posts</Text>
						</View>
					</View>

					<View style={styles.detailsCard}>
						<Image style={styles.bookCover} source={faultBook} />
						<Text style={styles.bookTitle}>Fault in Our Stars</Text>
						<View style={styles.bookPostsDetail}>
							<Image style={styles.icon} source={IconPost} />
							<Text style={styles.bookPosts}>6 Posts</Text>
						</View>
					</View>
				</View>
				<View style={styles.details}>
					<View style={styles.detailsCard}>
						<Image style={styles.bookCover} source={catcherBook} />
						<Text style={styles.bookTitle}>The Catcher in the RYE</Text>
						<View style={styles.bookPostsDetail}>
							<Image style={styles.icon} source={IconPost} />
							<Text style={styles.bookPosts}>6 Posts</Text>
						</View>
					</View>
					<View style={styles.detailsCard}>
						<Image style={styles.bookCover} source={adventureBook} />
						<Text style={styles.bookTitle}>The Adventure of Tom Sawyer</Text>
						<View style={styles.bookPostsDetail}>
							<Image style={styles.icon} source={IconPost} />
							<Text style={styles.bookPosts}>6 Posts</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	bookCover: {
		height: 160,
		width: 160,
		borderRadius: 8
	},
	scrollView: {
		marginHorizontal: 20,
		marginTop: 16
	},
	details: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 15
	},
	detailsCard: {
		height: 210,
		width: 160,
		alignItems: 'center'
	},
	bookTitle: {
		height: 19,
		width: 149,
		color: '#4A4A4A',
		// fontFamily: 'Roboto Slab',
		fontSize: 14,
		letterSpacing: 0,
		lineHeight: 19,
		textAlign: 'center'
	},
	bookPostsDetail: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: 60
	},
	icon: {
		height: 10,
		width: 10,
		tintColor: '#9B9B9B'
	},
	bookPosts: {
		height: 17,
		width: 41,
		color: '#9B9B9B',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17,
		textAlign: 'center'
	}
});
