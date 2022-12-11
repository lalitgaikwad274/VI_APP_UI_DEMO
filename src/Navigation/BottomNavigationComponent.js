import * as React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyAccount from '../MyAccount';
function Menu() {
  return (
    <View style={styles.center}>
      <Text>Menu!</Text>
    </View>
  );
}

function Recharge() {
  return (
    <View style={styles.center}>
      <Text>Recharge</Text>
    </View>
  );
}

function Movies() {
  return (
    <View style={styles.center}>
      <Text>Movies!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MyAccount"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          borderRadius: 50,
          left: 10,
          right: 10,
        },
      }}>
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recharge"
        component={Recharge}
        options={{
          tabBarLabel: 'Recharge',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="arrow-up-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="movie-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomNavigationComponent() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
