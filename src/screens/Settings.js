/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity,
	StatusBar,
	Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import IconProfile from '../assets/images/icon-profile.png';
import IconInvite from '../assets/images/icon-invite.png';
import IconHelp from '../assets/images/icon-help.png';
import IconFeedback from '../assets/images/icon-feedback.png';
import IconLogout from '../assets/images/icon-logout.png';

const Settings = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Settings</Text>
			<SafeAreaView>
				<ScrollView style={styles.scrollView}>
					<View style={styles.nav}>
						<View style={styles.navIcon}>
							<Image style={styles.iconProfile} source={IconProfile} />
						</View>
						<TouchableOpacity>
							<Text style={styles.navListTitle}>Profile</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.line} />

					<View style={styles.nav}>
						<View style={styles.navIcon}>
							<Image style={styles.iconInvite} source={IconInvite} />
						</View>

						<TouchableOpacity>
							<Text style={styles.navListTitle}>Invite</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.line} />

					<View style={styles.nav}>
						<View style={styles.navIcon}>
							<Image style={styles.iconHelp} source={IconHelp} />
						</View>
						<TouchableOpacity>
							<Text style={styles.navListTitle}>Help and support</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.line} />

					<View style={styles.nav}>
						<View style={styles.navIcon}>
							<Image style={styles.iconFeedback} source={IconFeedback} />
						</View>
						<TouchableOpacity>
							<Text style={styles.navListTitle}>Leave feedback</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.line} />

					<View style={styles.nav}>
						<View style={styles.navIcon}>
							<Image style={styles.iconLogout} source={IconLogout} />
						</View>
						<TouchableOpacity>
							<Text style={styles.navListTitle}>Logout</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollView: {
		backgroundColor: Colors.lighter,
		marginTop: 40
	},
	engine: {
		position: 'absolute',
		right: 0
	},
	body: {
		backgroundColor: Colors.white
	},
	heading: {
		height: 24,
		width: 'auto',
		color: '#000000',
		// fontFamily: 'Mermaid',
		fontSize: 20,
		fontWeight: 'bold',
		letterSpacing: 0,
		lineHeight: 24,
		textAlign: 'center',
		marginTop: 50
	},
	//navigation list
	nav: {
		flex: 0,
		flexDirection: 'row',
		marginTop: 20,
		marginLeft: 25
	},
	navIcon: {
		height: 20,
		width: 18
	},
	navListTitle: {
		height: 22,
		width: 'auto',
		color: '#4A4A4A',
		// fontFamily: 'Noto Sans',
		fontSize: 16,
		letterSpacing: 0,
		lineHeight: 22,
		marginLeft: 20
	},
	//icons
	iconProfile: {
		height: 18,
		width: 14
	},
	iconInvite: {
		height: 16,
		width: 15
	},
	iconHelp: {
		height: 16,
		width: 10
	},
	iconFeedback: {
		height: 14,
		width: 16
	},
	iconLogout: {
		height: 16,
		width: 15
	},
	//line
	line: {
		width: 360,
		borderBottomColor: '#E1E1E1',
		borderBottomWidth: 1,
		marginTop: 20,
		marginLeft: 25
	}
});

export default Settings;
