import * as React from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function Index() {
  const width = Dimensions.get('window').width;
  return (
    <View style={{margin: 20}}>
      <Carousel
        // loop
        width={width}
        height={width / 2}
        // autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log('current index:', index)}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/images/banner1.png')}
              resizeMode="contain"
              style={{height: 250, width: 250}}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Index;
