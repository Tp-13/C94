import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../components/MainAppHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <AppHeader/>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
                source={require('../assets/bookTrade.png')}
                style={{ width:40, height:40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('DictionaryScreen')}>
            <Image
                source={require('../assets/dictionary.png')}
                style={{ width:40, height:40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('CurrencyConversionScreen')}>
            <Text>Currency Converter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('NewsScreen')}>
            <Text>Top News</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ratingContainer}>
          <Text style = {{textAlign: 'center', margin: 5}}>Rate us</Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    width: 300,
    height: 50,
    backgroundColor: '#ff7812',
    borderRadius: 100,
  },
  ratingContainer: {
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    width: 200,
    height: 100,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
  },
});
