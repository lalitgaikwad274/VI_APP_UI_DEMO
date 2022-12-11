import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const NewsRenderFunction = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.imgsrc} style={styles.imgStyle} />
      <View style={{backgroundColor: 'red', width: 50}}>
        <Text style={{color: 'white', textAlign: 'center'}}>LIVE</Text>
      </View>
    </View>
  );
};

export const MusicRenderFunction = ({item}) => {
  return (
    <View style={styles.Musiccontainer}>
      <Image source={item.imgsrc} style={styles.musicImgStyle} />
      <Text style={{fontSize: 15, color: 'black', alignSelf: 'center'}}>
        {item.name}
      </Text>
    </View>
  );
};
export const GameRenderFunction = ({item}) => {
  return (
    <View style={styles.GameContainer}>
      <Image source={item.imgsrc} style={styles.gameImgStyle} />
      <Text style={{fontSize: 15, color: 'black', alignSelf: 'center'}}>
        {item.name}
      </Text>
    </View>
  );
};

export const ottRenderFunction = ({item}) => {
  return (
    <View style={styles.ottContainer}>
      <Image source={item.imgSrc} style={styles.ottImg} />
      <View
        style={[
          styles.ottText,
          {backgroundColor: item.id % 2 === 0 ? '#F33535' : '#FFC300'},
        ]}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: item.id % 2 === 0 && 'white',
          }}>
          {item.head}
        </Text>
        <Text
          style={{
            color: item.id % 2 === 0 && 'white',
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export const helpRenderFunction = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        alignItems: 'center',
        width: 80,
      }}>
      <Icon
        name={item.icon}
        size={30}
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          elevation: 5,
        }}
        color={item.id === 1 && 'red'}
      />
      <Text style={{textAlign: 'center'}}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    margin: 20,
    alignItems: 'center',
  },
  imgStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  Musiccontainer: {
    height: 170,
    width: 150,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  musicImgStyle: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  gameImgStyle: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  GameContainer: {
    height: 140,
    width: 120,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  ottContainer: {
    width: 200,
    marginLeft: 20,
  },
  ottImg: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    bottom: -15,
    zIndex: 1,
    left: 10,
  },
  ottText: {
    width: 200,
    padding: 10,
    height: 100,
    paddingTop: 20,
    borderRadius: 10,
  },
});
