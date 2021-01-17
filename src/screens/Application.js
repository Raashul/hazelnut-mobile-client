import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from './index';
import { StyleConstants } from '../components';

import DashboardStackNavigator from '../navigation/Dashboard';
import AuthenticationNavigator from '../navigation/Authentication';

import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function Application() {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const isLoggedIn = authState.isLoggedIn;
	console.log('auth', authState);

	return (
		<NavigationContainer>
			{isLoggedIn == false ? (
				<AuthenticationNavigator />
			) : (
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size, tintColor }) => {
							let imagePath;

							if (route.name === 'Home') {
								imagePath = require('../assets/images/icon-home.png');
							} else if (route.name === 'Settings') {
								imagePath = require('../assets/images/icon-setting.png');
							} else if (route.name === 'Login') {
								imagePath = require('../assets/images/icon-profile.png');
							} else {
								imagePath = require('../assets/images/icon-home.png');
							}
							return <Image style={{ width: 25, height: 25, tintColor: tintColor }} source={imagePath} />;
						}
					})}
					tabBarOptions={{
						activeTintColor: StyleConstants.pallete.dark_brown,
						inactiveTintColor: '#586589',
						tabStyle: {
							shadowOffset: { width: 0, height: 1 },
							shadowOpacity: 0.4,
							shadowColor: '#000',
							borderColor: '#F6F6F6',
							shadowRadius: 3,
							// marginBottom: 5,
							borderTopWidth: 0.8,
							elevation: 2
						}
					}}
				>
					<Tab.Screen name="Home" component={DashboardStackNavigator} />
					<Tab.Screen name="Settings" component={Screens.Settings} options={{ title: 'Settings' }} />
				</Tab.Navigator>
			)}
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
