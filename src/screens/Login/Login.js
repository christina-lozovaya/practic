import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { ThemedInput, ThemedButton } from "../../components";
import * as FirebaseAPI from '../../modules/firebaseAPI'; //* import all functions from firebaseAPI 
import firebase from 'firebase';


// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log(email, password);

//   return (
//     <ScrollView>
//       <Text>Login</Text>
//       <ThemedInput value={email} onChangeText={value => setEmail(value)} />

//       <ThemedInput
//         value={password}
//         onChangeText={value => setPassword(value)}
//         secureTextEntry
//       />

//       <ThemedButton
//         title="Login"
//         onPress={() => navigation.navigate("Dashboard")}
//       />
//     </ScrollView>
//   );
// };

// Login.navigationOptions = {
//   title: "Login"
// };

// export default Login;

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    email: "Enter email",
    password: "Enter password"
  };

  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  
  // };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStateChanged: ', user);

      if (user) {
        navigation.navigate('Dashboard');
      }
    });
  }

  

  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#E5F2F2'}}>
        
        <ThemedInput value={this.state.email} onChangeText={value => this.setState({email: value})} />
        <ThemedInput value={this.state.password} onChangeText={value => this.setState({password: value})} />
        <ThemedButton
          title="Create new User"
          // onPress={() => navigation.navigate("Dashboard")}
          onPress={() => this.createUser()}
        />
        <ThemedButton
          title="Sign In"
          // onPress={() => navigation.navigate("Dashboard")}
          onPress={() => this.signIn()}
        />
        {/* <ThemedInput value={email} onChangeText={value => setEmail(value)} /> */}

        {/* <ThemedInput
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        /> */}

        {/* <ThemedButton
          title="Login"
          onPress={() => navigation.navigate("Dashboard")}
        /> */}
      </ScrollView>
    )
  }

}
