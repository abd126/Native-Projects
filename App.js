import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WeatherApp from './Screens/WeatherApp/WeatherApp';

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
