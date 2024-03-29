// React Native
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// Components
import Title from './src/components/Title'
import Main from './src/components/Main'

export default function App() {
	return (
		<View style={styles.container}>
			<Title />
			<Main />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
