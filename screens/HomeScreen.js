import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TextInput } from 'react-native-paper';

import Navbar from '../components/Navbar/Navbar';
import { MaterialCommunityIcons } from '@expo/vector-icons/';

export default class HomeScreen extends React.Component {
  state = {
    password: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar navigation={this.props.navigation} />
        {/* <TextInput
          style={{ marginTop: 30, margin: 20 }}
          // secureTextEntry={true}
          mode="outlined"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          // render={()=><MaterialCommunityIcons name="eye" size={} /> }
        /> */}
        <Text style={styles.textStyle}>Welcome to Niflr challenge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 200,
  }
});