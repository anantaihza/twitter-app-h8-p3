import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login';
import Register from './screens/Register';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerSafeArea}>
        <StatusBar style="auto" />
        {/* <Register /> */}
        <Login />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
