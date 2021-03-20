import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import dictionary from '../localDB';
import * as Speech from 'expo-speech';
import { Alert } from 'react-native';

export default class CurrencyConversionScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            toCurrency: '',
            fromCurrency: '',
            enteredAmount: 0,
            //resultAmount: 0,
        }
    }

    convert = async () => {
        Alert.alert('Convert')
        fetch("http://data.fixer.io/api/latest?access_key=fe9a6e76144cac717fd9f64ddc25aaaf")
        .then(response=>{
          return response.json();
        }).then(responseData =>{
            console.log(responseData)
          var fromcurrency = this.state.fromCurrency
          var tocurrency = this.state.toCurrency
          var fromCurrencyRate = responseData.rates[fromCurrency]
          console.log(fromCurrencyRate);
        })
      }

    render() {
        return (
          <SafeAreaProvider>
            <View style={styles.container}>
              <Header
                backgroundColor={'#9c8219'}
                centerComponent={{
                  text: 'Currency Converter',
                  style: { color: 'white', fontSize: 20 },
                }}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({ fromCurrency: text });
                }}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({ toCurrency: text });
                }}
              />
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({ enteredAmount: text });
                }}
              />
              <TouchableOpacity
                styles={styles.goButton}
                onPress={() => {
                  this.convert();
                }}>
                <Text style={styles.buttonText}>CONVERT</Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.displayText}>Converted Amount:</Text>
              </View>
            </View>
          </SafeAreaProvider>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 20,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      borderWidth: 1,
    },
    buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },
    displayText: { textAlign: 'center', fontSize: 20 },
    imageIcon: {
      width: 150,
      height: 150,
      marginLeft: 95,
    },
    chunkButton: {
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'gray',
    },
  });
  