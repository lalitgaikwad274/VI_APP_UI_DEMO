import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContainerList = ({data, renderFunction, sectionName}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.text}>{sectionName}</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderFunction}
        keyExtractor={key => key.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ContainerList;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
    marginBottom: 15,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
