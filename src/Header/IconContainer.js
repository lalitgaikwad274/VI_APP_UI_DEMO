import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconContainer = ({name, data}) => {
  const [Data, setData] = useState(data);
  const [Color, setColor] = useState('#e32636');
  const [index, setIndex] = useState(0);
  const flatlistRef = useRef();
  //get random color function
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';

    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const applyFilter = e => {
    const d = Data.map(item => {
      return e === item.id ? {...item, show: true} : {...item, show: false};
    });
    setData(d);
    if (e === 1) {
      setColor('#e32636');
    } else {
      setColor(getRandomColor());
    }
  };

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => applyFilter(item.id)}>
        <Icon
          name={item.icon}
          size={30}
          color={'white'}
          style={styles.alignSelf}
        />
        <Text style={styles.textWhite}>{item.name}</Text>
        {item.show ? (
          <View style={{backgroundColor: 'yellow', height: 3}}></View>
        ) : null}
      </Pressable>
    );
  };

  const renderItemCircle = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => applyFilter(item.id)}
          style={[styles.alignCenter, {width: 80}]}>
          <Icon
            name={item.icon}
            size={30}
            color={'red'}
            style={styles.circleIcon}
          />
          <View style={styles.alignCenter}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const itemSeprator = () => {
    return <View style={{marginLeft: 20}}></View>;
  };

  useEffect(() => {
    if (name === 'circle') {
      setTimeout(() => {
        if (flatlistRef.current) {
          flatlistRef.current.scrollToIndex({
            animated: true,
            index: index % Data.length,
          });
          if (index === Data.length - 3) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
        }
      }, 1000);
    }
  }, [index]);

  return (
    <View
      style={[
        styles.listContainer,
        {backgroundColor: name === 'normal' ? Color : ''},
      ]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        // scrollToIndex={i}
        horizontal
        keyExtractor={key => key.id}
        data={Data}
        renderItem={name === 'normal' ? renderItem : renderItemCircle}
        ItemSeparatorComponent={itemSeprator}
        ref={flatlistRef}
        onEndThreshold={0}
        getItemLayout={(data, index) => {
          return {
            length: Data.length - 4,
            offset: 100 * index,
            index,
          };
        }}
      />
    </View>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  circleIcon: {
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: 'black',
  },
  listContainer: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 20,
  },
  textWhite: {
    fontSize: 20,
    color: 'white',
  },
  alignSelf: {
    alignSelf: 'center',
  },
});
