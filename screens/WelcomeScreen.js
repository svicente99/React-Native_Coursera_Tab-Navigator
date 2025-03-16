import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection:'row', alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={require('../images/Lemon_Logo.png')}
          accessible={true}
          accessibilityLabel={'Little Lemon logo'}
        />
        <Text style={styles.title}>Little Lemon</Text>
      </View>
      <Text style={styles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. 
        We would love to hear your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 90,
    resizeMethod: 'scale',
    resizeMode: 'cover',
    marginLeft: 15,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'black',
  },
  title: {
    marginTop: 5, marginLeft: 30,
    paddingVertical: 18,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center',
  },
  text: {
    marginTop: 16,
    paddingVertical: 18,
    fontSize: 20,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
