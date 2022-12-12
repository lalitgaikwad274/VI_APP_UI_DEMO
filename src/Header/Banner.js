import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('window');

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollTo({x: -30});
    }, 1);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
          style={styles.container}
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          showsHorizontalScrollIndicator={false}>
          <Box srcimg={this.props.srcimg} name={this.props.name} />
          <Box srcimg={this.props.srcimg} name={this.props.name} />
          <Box srcimg={this.props.srcimg} name={this.props.name} />
          <Box srcimg={this.props.srcimg} name={this.props.name} />
          <Box srcimg={this.props.srcimg} name={this.props.name} />
        </ScrollView>
      </View>
    );
  }
}

// const MainBox = () => {
//   return (
//     <View style={[styles.view, {backgroundColor: 'white', padding: 15}]}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}>
//         <View>
//           <View
//             style={{
//               flexDirection: 'row',
//             }}>
//             <Text
//               style={{
//                 fontSize: 40,
//                 color: 'black',
//                 fontWeight: 'bold',
//               }}>
//               3.5
//             </Text>
//             <Text
//               style={{
//                 fontSize: 20,
//                 color: 'black',
//                 alignSelf: 'flex-end',
//                 fontWeight: 'bold',
//                 marginBottom: 4,
//               }}>
//               GB
//             </Text>
//           </View>
//           <Text style={{fontWeight: 'bold'}}>Data left</Text>
//         </View>
//         <View style={{alignItems: 'flex-end'}}>
//           <Text style={{fontWeight: 'bold'}}>Truly</Text>
//           <Text style={{fontWeight: 'bold'}}>Unlimited Calls</Text>
//         </View>
//       </View>
//       <View>
//         <Text style={{marginTop: 10}}>Pacl valid till 10, Nov 2022</Text>
//       </View>
//       <View>
//         <View
//           style={{
//             marginTop: 10,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             style={{
//               padding: 10,
//               borderRadius: 50,
//               backgroundColor: 'red',
//               width: 150,
//             }}>
//             <Text style={{color: 'white', textAlign: 'center'}}>
//               Recharge Now
//             </Text>
//           </TouchableOpacity>
//           <Text
//             style={{
//               textDecorationLine: 'underline',
//               fontWeight: 'bold',
//             }}>
//             Pack Details
//           </Text>
//         </View>
//         <View
//           style={{
//             width: 290,
//             height: 50,
//             justifyContent: 'center',
//             borderRadius: 20,
//           }}>
//           <Image
//             source={require('../assets/images/data.png')}
//             style={{
//               resizeMode: 'cover',
//               width: '100%',
//               height: 60,
//               alignSelf: 'center',
//               marginTop: 30,
//               borderRadius: 10,
//             }}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

const Box = ({srcimg, name}) => {
  return (
    <View style={name === 'small' ? styles.view1 : styles.view}>
      <Image source={srcimg} resizeMode="contain" style={{height: 200}}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  // btn: {
  //   backgroundColor: 'yellow',
  //   width: 150,
  //   paddingVertical: 10,
  //   alignItems: 'center',
  //   borderRadius: 50,
  //   position: 'absolute',
  //   bottom: 20,
  //   left: 20,
  // },
  // view: {
  //   // flex: 1,
  //   marginTop: 30,
  //   width: width - 80,
  //   margin: 10,
  //   borderRadius: 20,
  //   height: 250,
  //   top: 0,
  //   // position: 'absolute',
  //   // left: -140,
  // },

  view1: {
    width: width - 80,
    margin: 10,
    borderRadius: 20,
    height: 200,
  },
});

// const imageW = width * 0.7;
// const imageH = imageW * 1.54;
// const Banner = ({srcimg, name}) => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   return (
//     <View style={{flex: 1}}>
//       {/* <StatusBar hidden> */}
//       {/* <View style={StyleSheet.absoluteFillObject}>
//         {data.map((item, index) => {
//           return (
//             <Image
//               key={`image-${index}`}
//               source={srcimg}
//               style={[StyleSheet.absoluteFillObject]}
//             />
//           );
//         })}
//       </View> */}
//       <Animated.FlatList
//         data={data}
//         horizontal
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: scrollX}}}],
//           {useNAtiveDriver: true},
//         )}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={({item}) => {
//           return (
//             <View
//               style={{
//                 width: 300,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Image
//                 source={require('../assets/images/banner1.png')}
//                 style={{
//                   width: 250,
//                   height: 250,
//                   resizeMode: 'cover',
//                   borderRadius: 10,
//                   margin: 10,
//                 }}
//               />
//             </View>
//           );
//         }}
//       />
//       {/* </StatusBar> */}
//     </View>
//   );
// };
// export default Banner;
{
  /* {this.props.name !== 'small' && (
            <View
              style={[styles.view, {backgroundColor: 'white', padding: 15}]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 40,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      3.5
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        alignSelf: 'flex-end',
                        fontWeight: 'bold',
                        marginBottom: 4,
                      }}>
                      GB
                    </Text>
                  </View>
                  <Text style={{fontWeight: 'bold'}}>Data left</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={{fontWeight: 'bold'}}>Truly</Text>
                  <Text style={{fontWeight: 'bold'}}>Unlimited Calls</Text>
                </View>
              </View>
              <View>
                <Text style={{marginTop: 10}}>
                  Pacl valid till 10, Nov 2022
                </Text>
              </View>
              <View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      borderRadius: 50,
                      backgroundColor: 'red',
                      width: 150,
                    }}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      Recharge Now
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      fontWeight: 'bold',
                    }}>
                    Pack Details
                  </Text>
                </View>
                <View
                  style={{
                    width: 290,
                    height: 50,
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}>
                  <Image
                    source={require('../assets/images/data.png')}
                    style={{
                      resizeMode: 'cover',
                      width: '100%',
                      height: 60,
                      alignSelf: 'center',
                      marginTop: 30,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          )} */
}
