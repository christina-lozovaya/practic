import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Heeeeeyyyy</Text>
      <Image source={{uri: 'http://pics.livejournal.com/morontt/pic/0003e7z2'}} style={{width: '40%', height: '40%'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
