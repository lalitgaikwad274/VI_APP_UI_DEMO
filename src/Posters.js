import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Posters = () => {
  return (
    <View
      style={{
        backgroundColor: '#CDFCF6',
        paddingBottom: 20,
      }}>
      <View
        style={{
          paddingRight: 80,
          paddingLeft: 10,
          backgroundColor: '#CDFCF6',
          marginBottom: 10,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
          Jobs & Education
        </Text>
        <Text>Job dhoondo, English seekho, Sarkari naukari ki tayari karo</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require('./assets/images/apna.jpeg')}
          style={styles.imgStyle}
        />
        <Image
          source={require('./assets/images/english.png')}
          style={styles.imgStyle}
        />
        <Image
          source={require('./assets/images/naukri.jpeg')}
          style={styles.imgStyle}
        />
      </View>
    </View>
  );
};

export default Posters;

const styles = StyleSheet.create({
  imgStyle: {
    width: '90%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  imgContainer: {
    width: 400,
  },
});
