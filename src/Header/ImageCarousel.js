import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8;
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 40;

const data = [
  {
    id: 0,
    uri: require('../assets/images/banner1.png'),
  },
  {
    id: 1,
    uri: require('../assets/images/banner1.png'),
  },
  {
    id: 2,
    uri: require('../assets/images/banner1.png'),
  },
  {
    id: 3,
    uri: require('../assets/images/banner1.png'),
  },
  {
    id: 4,
    uri: require('../assets/images/banner1.png'),
  },
  {
    id: 5,
    uri: require('../assets/images/banner1.png'),
  },
];

const ImageCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [dataWithPlaceholders, setDataWithPlaceholders] = useState(data);

  // useEffect(() => {
  //   setDataWithPlaceholders([{id: -1}, ...data, {id: data.length}]);
  // }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        // ref={flatListRef}
        data={dataWithPlaceholders}
        renderItem={({item, index}) => {
          if (!item.uri) {
            return <View style={{width: EMPTY_ITEM_LENGTH}} />;
          }

          const inputRange = [
            (index - 1) * ITEM_LENGTH,
            index * ITEM_LENGTH,
            (index + 1) * ITEM_LENGTH,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [
              CURRENT_ITEM_TRANSLATE_Y * 2,
              CURRENT_ITEM_TRANSLATE_Y,
              CURRENT_ITEM_TRANSLATE_Y * 2,
            ],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            // extrapolate: 'clamp',
          });

          return (
            <View style={{width: ITEM_LENGTH}}>
              <Animated.View
                style={[
                  opacity,
                  {
                    transform: [{translateY}],
                  },
                  styles.itemContent,
                ]}>
                <Image source={item.uri} style={styles.itemImage} />
              </Animated.View>
            </View>
          );
        }}
        // getItemLayout={getItemLayout}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    // height: ITEM_LENGTH + 20,
  },
  flatListContent: {
    height: 300,
    alignItems: 'center',
    // backgroundColor: 'red',
    // flexGrow: 1,
  },
  itemContent: {
    marginHorizontal: SPACING * 3,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: BORDER_RADIUS + SPACING * 2,
    marginBottom: 90,
  },
  itemImage: {
    borderRadius: BORDER_RADIUS,
    resizeMode: 'contain',
    height: 230,
    width: 280,
  },
});
