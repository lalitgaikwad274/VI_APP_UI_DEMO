import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const NewConntion = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          paddingLeft: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        get new VI connection
      </Text>
      <View
        style={{
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 170,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          <View style={styles.iconStyle}>
            <Icon
              name="sim-outline"
              size={30}
              color="black"
              style={{backgroundColor: 'white', padding: 10, borderRadius: 50}}
            />
            <Text style={styles.text}>Buy Postpaid</Text>
          </View>
          <View style={styles.iconStyle}>
            <Icon
              name="sim-outline"
              size={30}
              color="black"
              style={{backgroundColor: 'white', padding: 10, borderRadius: 50}}
            />
            <Text style={styles.text}>Buy Prepaid</Text>
          </View>
          <View style={styles.iconStyle}>
            <Icon
              name="arrow-up-bold-box-outline"
              size={30}
              color="black"
              style={{backgroundColor: 'white', padding: 10, borderRadius: 50}}
            />
            <Text style={styles.text}>Port to VI</Text>
          </View>
          <View style={styles.iconStyle}>
            <Icon
              name="crown-outline"
              size={30}
              color="black"
              style={{backgroundColor: 'white', padding: 10, borderRadius: 50}}
            />
            <Text style={styles.text}>Get VIP number</Text>
          </View>
        </View>
        <View style={{width: 160, alignItems: 'center'}}>
          <Image
            source={require('./assets/images/wifi.png')}
            style={{width: '100%', resizeMode: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
};

export default NewConntion;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  iconStyle: {
    width: 60,
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
});
