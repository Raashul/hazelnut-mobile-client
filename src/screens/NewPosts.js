import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import lordImage from '../assets/images/lord.jpg';
import IconCancel from '../assets/images/icon-cancel.png';
import IconDropdown from '../assets/images/icon-back.png';

const NewPosts = () => {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.heading}>
					<View style={styles.subHeading}>
						<TouchableOpacity>
							<Image style={styles.iconCancel} source={IconCancel} />
						</TouchableOpacity>
						<Text style={styles.title}>New Post</Text>
					</View>
					<View>
						<TouchableOpacity>
							<Text style={styles.save}>SAVE</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.card}>
					<View style={styles.subCard}>
						<Image style={styles.image} source={lordImage} />
						<View style={{ marginLeft: 11 }}>
							<Text style={styles.subTitleIndex}>Posting in</Text>
							<Text style={styles.subTitle}>Lord of the Rings</Text>
						</View>
					</View>
					<TouchableOpacity>
						<Image style={styles.iconDropdown} source={IconDropdown} />
					</TouchableOpacity>
				</View>
				<View style={styles.line} />
				<TextInput style={styles.inputText} placeholder="Start writing here..." />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	//Header section
	heading: {
		marginTop: 20,
		marginBottom: 45,
		width: 375,
		height: 63,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff'
	},
	subHeading: {
		flex: 0,
		marginLeft: 0
	},
	iconCancel: {
		width: 15,
		height: 15,
		tintColor: '#1D1D1B',
		marginLeft: 0
	},
	title: {
		width: 'auto',
		height: 21,
		color: '#000000',
		// fontFamily: 'Roboto Slab',
		fontSize: 16,
		letterSpacing: 0,
		lineHeight: 21,
		marginLeft: 30
	},
	save: {
		height: 22,
		width: 'auto',
		color: '#D39967',
		// fontFamily: 'Noto Sans',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 0,
		lineHeight: 22,
		justifyContent: 'flex-end'
	},
	//card body
	card: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#F5F5F5',
		height: 54,
		width: 375,
		borderRadius: 8
	},
	subCard: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10
	},
	image: {
		height: 46,
		width: 46,
		borderRadius: 8
	},
	iconDropdown: {
		height: 10,
		width: 10,
		tintColor: '#9B9B9B',
		transform: [ { rotate: '270deg' } ],
		justifyContent: 'flex-end',
		marginRight: 20
	},
	subTitleIndex: {
		height: 17,
		width: 57,
		color: '#D39967',
		// fontFamily: 'Noto Sans',
		fontSize: 12,
		letterSpacing: 0,
		lineHeight: 17
	},

	//line
	line: {
		width: 400,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 2,
		marginTop: 12
	},
	//inputText
	inputText: {
		height: 40,
		width: 335,
		color: '#9B9B9B',
		// fontFamily: 'Roboto Slab',
		fontSize: 18,
		fontWeight: '300',
		letterSpacing: 0,
		lineHeight: 28,
		marginTop: 10
	}
});
export default NewPosts;
