import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  //   FlatList,
  Animated,
  SafeAreaView,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
  FlatList,
} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

const Banner1 = ({srcimg, name}) => {
  // const [Data, setData] = useState(data);

  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const flatlistRef = useRef();

  const setActiveIndex = useCallback(activeIndex => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });
  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();

    // setInterval(() => {
    //   scrollXIndex.setValue(index);
    //   setIndex(index + 1);
    // }, 10000);
  });
  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (flatlistRef.current) {
  //         flatlistRef.current.scrollToIndex({
  //           animated: true,
  //           index: index % Data.length,
  //         });
  //         if (index === Data.length - 3) {
  //           setIndex(0);
  //         } else {
  //           setIndex(index + 1);
  //         }
  //       }
  //     }, 1000);
  //   }, [index]);

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
          // setIndex(index + 1);
          // scrollXIndex.setValue(index + 1);
        }
      }}>
      <FlingGestureHandler>
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
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, {zIndex: data.length - index}];

              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({item, index}) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, -10, -110],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.9, 1.1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / 3, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    margin: 20,
                    // position: 'absolute',
                    left: -140,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      {scale},
                    ],
                  }}>
                  <Image
                    source={srcimg}
                    resizeMode="contain"
                    style={{height: 250, width: 250}}
                  />
                </Animated.View>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Banner1;
