import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  FlatList,
  Animated,
  SafeAreaView,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    color: 'red',
  },
  {
    id: 2,
    color: 'yellow',
  },
  {
    id: 3,
    color: 'pink',
  },
  {
    id: 4,
    color: 'black',
  },
  {
    id: 5,
    color: 'orange',
  },
  {
    id: 6,
    color: 'gray',
  },
];

const Banner1 = ({srcimg, name}) => {
  const [Data, setData] = useState(data);

  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const flatlistRef = useRef();

  // const setActiveIndex = useCallback(activeIndex => {
  //   setIndex(activeIndex);
  //   scrollXIndex.setValue(activeIndex);
  // });
  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();

    // setInterval(() => {
    //   scrollXIndex.setValue(index);
    //   setIndex(index + 1);
    //   console.log(index);
    // }, 3000);
  });
  useEffect(() => {
    setTimeout(() => {
      if (flatlistRef.current) {
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: index % Data.length,
        });
        if (index === Data.length) {
          setIndex(0);
        } else {
          scrollXIndex.setValue(index);
          setIndex(index + 1);
        }
      }
    }, 1000);
  }, [index]);

  return (
    // <FlingGestureHandler
    //   key="left"
    //   direction={Directions.LEFT}
    //   onHandlerStateChange={ev => {
    //     if (ev.nativeEvent.state === State.END) {
    //       if (index === data.length - 1) {
    //         return;
    //       }
    //       setActiveIndex(index + 1);
    //       // setIndex(index + 1);
    //       // scrollXIndex.setValue(index + 1);
    //     }
    //   }}>
    //   <FlingGestureHandler>
    <SafeAreaView style={{height: 280}}>
      <FlatList
        data={data}
        ref={flatlistRef}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}
        // inverted
        // scrollEnabled={false}
        removeClippedSubviews={false}
        CellRendererComponent={({item, index, children, style, ...props}) => {
          const newStyle = [style, {zIndex: data.length - index - 1}];

          return (
            <View style={newStyle} index={index} {...props}>
              {children}
            </View>
          );
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            // index - 2,
            index - 1,
            index,
            index + 1,
            // index + 2,
          ];
          const translateX = scrollXAnimated.interpolate({
            inputRange,
            // outputRange: [100, 45, 0, -45, -100],
            outputRange: [60, 0, -60],
          });
          const scale = scrollXAnimated.interpolate({
            inputRange,
            // outputRange: [0.3, 0.8, 1, 0.8, 0.3],
            outputRange: [0.8, 1, 0.8],
          });
          const opacity = scrollXAnimated.interpolate({
            inputRange,
            // outputRange: [0.6, 0.8, 1, 0.8, 0.6],
            outputRange: [0.7, 1, 0.7],
          });

          return (
            <Animated.View
              style={{
                margin: 20,
                position: 'absolute',
                left: -140,
                opacity,
                transform: [
                  {
                    translateX,
                  },
                  {scale},
                ],
              }}>
              <View
                style={{
                  height: 250,
                  width: 250,
                  backgroundColor: item.color,
                }}></View>
              {/* <Image
                source={srcimg}
                resizeMode="contain"
                style={{height: 250, width: 250}}
              /> */}
            </Animated.View>
          );
        }}
      />
    </SafeAreaView>
    //   </FlingGestureHandler>
    // </FlingGestureHandler>
  );
};

export default Banner1;
