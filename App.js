import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import store from './src/store/store';
import firebase from 'firebase';

// My web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDtFYJjR1t_bPaKjERfWGt-uWSOhymPalY",
  authDomain: "react-native-lecture.firebaseapp.com",
  databaseURL: "https://react-native-lecture.firebaseio.com",
  projectId: "react-native-lecture",
  storageBucket: "",
  messagingSenderId: "506142053658",
  appId: "1:506142053658:web:168b5cec5b07a2b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const App = ({ skipLoadingScreen }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </Provider>
  );
};

export default App;
