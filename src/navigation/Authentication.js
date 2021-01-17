import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';

const Stack = createStackNavigator();

export default function AuthenticationNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="Login" component={Screens.Login} options={{ title: 'Login' }} />
		</Stack.Navigator>
	);
}

//styling for header bar
const styles = StyleSheet.create({
	headerStyle: {
		height: 50,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.6,
		shadowColor: '#F6F6F6',
		backgroundColor: '#F6F6F6',
		borderColor: '#F6F6F6',
		shadowRadius: 3,
		borderBottomWidth: 0.2,
		elevation: 0,
		shadowOpacity: 0
	},
	headerTitleStyle: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
		flex: 1
		// fontFamily: 'Mermaid'
	}
});
