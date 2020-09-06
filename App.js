import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainView from './src/views/MainView';
import DetailView from './src/views/DetailView';

const App = () => {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainView">
				<Stack.Screen name="MainView" component={MainView} />
				<Stack.Screen name="DetailView" component={DetailView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
