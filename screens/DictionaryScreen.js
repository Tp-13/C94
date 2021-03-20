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

export default class DictionaryScreen extends React.Component {
  constructor() {
    super();
    this.state = { inputText: '', lexicalCategory: '', definition: '' };
  }

  getWord = () => {
    var text = this.state.inputText.toLowerCase();
    try {
      var word = dictionary[text]['word'];
      var lexicalCategory = dictionary[text]['lexicalCategory'];
      var definition = dictionary[text]['definition'];
      this.setState({
        lexicalCategory: lexicalCategory,
        definition: definition,
      });
    } catch (err) {
      alert('Sorry This word is not available for now');
      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };

  speech = () => {     
    var thingtosay = this.state.inputText;    
    console.log(thingtosay)
    Speech.speak(thingtosay);   
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#9c8219'}
            centerComponent={{
              text: 'Pocket Dictionary',
              style: { color: 'white', fontSize: 20 },
            }}
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
          />
          <TouchableOpacity
            styles={styles.goButton}
            onPress={() => {
              this.getWord();
            }}>
            <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chunkButton} onPress={this.speech}>
              <Text style={styles.buttonText}>{this.state.inputText}</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.displayText}>Word: {this.state.inputText}</Text>
            <Text style={styles.displayText}>Definition: {this.state.definition}</Text>
            <Text style={styles.displayText}>Lexical Category: {this.state.lexicalCategory}</Text>
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
