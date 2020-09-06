import React from 'react';
import { Text, View } from 'react-native';

const DetailView = ({ route }) => {
	const { title } = route.params;
	return (
		<View>
			<Text>This is the detail for {title}</Text>
		</View>
	);
};

export default DetailView;
