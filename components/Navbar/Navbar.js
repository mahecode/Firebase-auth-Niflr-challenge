import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


export default class MyComponent extends React.Component {

  render() {
    return (
      <View>
      <Appbar.Header>
      <MaterialIcons style={{paddingLeft: 10}} name="menu" size={25} onPress={()=> this.props.navigation.openDrawer()} />
        <Appbar.Content
          title="Niflr"
          subtitle="challenge"
        />
      </Appbar.Header>
      </View>
    );
  }
}