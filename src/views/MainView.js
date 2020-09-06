import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import grammar from '../resources/grammar';

const MainView = ({ navigation }) => {
	return (
		<View>
			<Text>This is the main view with list</Text>
			{grammar.map((grammarPoint) => {
				return (
					<Button
						title={grammarPoint.title}
						onPress={() =>
							navigation.navigate('DetailView', {
								title: grammarPoint.title,
							})
						}
					/>
				);
			})}
		</View>
	);
};

export default MainView;
