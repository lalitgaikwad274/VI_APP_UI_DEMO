import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconContainer from './IconContainer';
import {iconData} from '../data';

const HeadComp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.text, {marginRight: 5}]}>Lalit</Text>
            <Icon name="keyboard-arrow-down" size={25} color={'white'} />
          </View>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>8828184568</Text>
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            width: 130,
            alignItems: 'center',
            backgroundColor: 'black',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 3,
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Win a smartwatch!
          </Text>
        </View>
      </View>
      <IconContainer name="normal" data={iconData} />
    </View>
  );
};

export default HeadComp;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  top: {
    paddingTop: 5,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
