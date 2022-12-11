import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const packData = [
  {
    id: 1,
    type: 'reward',
    imgsrc: require('./assets/images/paytem.jpeg'),
    reward: 'flat $15 cashback',
    text: 'for repeat users',
  },
  {
    id: 2,
    type: 'reward',
    imgsrc: require('./assets/images/mynta.jpeg'),
    reward: '30 reward coins',
    text: 'for every recharge',
  },
  {
    id: 3,
    type: 'reward',
    imgsrc: require('./assets/images/paytem.jpeg'),
    text: 'flat 1st time user',
    reward: 'flat $30 cashback',
  },
  {
    id: 4,
    type: 'reward',
    imgsrc: require('./assets/images/cred.jpeg'),
    reward: 'upto $50 cashback',
    text: 'using cred cash',
  },
  {
    id: 5,
    amount: 359,
    imgsrc: require('./assets/images/pack.png'),
    packInfo: '3GB/day + Unlimited calls',
    validity: 'valid for 28 days',
    text: 'Data Delight + Night Bings + Weekend data rollover',
  },
  {
    id: 6,
    amount: 299,
    imgsrc: require('./assets/images/pack.png'),
    packInfo: '1.5GB/day + Unlimited calls',
    validity: 'valid for 28 days',
    text: 'Data Delight + Night Bings + Weekend data rollover',
  },
  {
    id: 7,
    amount: 479,
    imgsrc: require('./assets/images/pack.png'),
    packInfo: '1.5GB/day + Unlimited calls',
    validity: 'valid for 28 days',
    text: 'Data Delight + Night Bings + Weekend data rollover',
  },
  {
    id: 8,
    amount: 719,
    imgsrc: require('./assets/images/pack.png'),
    packInfo: '1.5GB/day + Unlimited calls',
    validity: 'valid for 84 days',
    text: 'Data Delight + Night Bings + Weekend data rollover',
  },
  {
    id: 9,
    amount: 82,
    imgsrc: require('./assets/images/pack.png'),
    packInfo: '4GB/day for 14 calls',
    text: 'SonyLiv Mobile for 28 days',
  },
];

export const RewardBox = ({item}) => {
  return (
    <View style={styles.packContainer}>
      <Image source={item.imgsrc} style={styles.imgStyle} />
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          {item.reward}
        </Text>
        <Text style={{fontSize: 18}}>{item.text}</Text>
      </View>
    </View>
  );
};

export const PackBox = ({item}) => {
  return (
    <View style={[styles.packContainer, {backgroundColor: '#10234f'}]}>
      <View
        style={{
          height: 120,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <View style={styles.topBox}>
          <View
            style={{
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="currency-inr" size={20} color={'black'} />
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                {item.amount}
              </Text>
            </View>
            <Text>{item.validity}</Text>
          </View>
          <View>
            <Image source={item.imgsrc} style={styles.imgPackStyle} />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              width: 100,
              color: 'black',
              marginLeft: 10,
            }}>
            {item.packInfo}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          height: 25,
        }}>
        <Text
          style={{
            fontSize: 10,
            color: 'white',
            width: 150,
            textAlign: 'center',
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

const PacksBanner = () => {
  const renderItem = ({item}) => {
    return (
      <>
        {item.type === 'reward' ? (
          <RewardBox item={item} />
        ) : (
          <PackBox item={item} />
        )}
      </>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        data={packData}
        renderItem={renderItem}
        keyExtractor={key => key.id}
      />
    </View>
  );
};

export default PacksBanner;

const styles = StyleSheet.create({
  packContainer: {
    backgroundColor: 'white',
    height: 150,
    margin: 20,
    width: 200,
    borderRadius: 20,
  },
  imgStyle: {
    width: '100%',
    height: 75,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imgPackStyle: {
    width: 100,
    height: 75,
    resizeMode: 'cover',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 20,
  },
  topBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
