import React from 'react';
import { ScrollView, Text, InteractionManager } from 'react-native';
import { ThemedButton } from "../../components";
import * as FirebaseAPI from '../../modules/firebaseAPI'; //* import all functions from firebaseAPI 

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: "Dashboard"
  };

 
  logout(navigation) {
    console.log('logout called', navigation);
    FirebaseAPI.logoutUser()

    InteractionManager.runAfterInteractions(() => {
      navigation.navigate('Auth');
    })
  }

  render() {
    return (
      <ScrollView>
        <Text>Dashboard</Text>
        <ThemedButton
            title="Logout"
            onPress={() => this.logout(this.props.navigation)}
          
        />
      </ScrollView>
    );
  }
}


 
