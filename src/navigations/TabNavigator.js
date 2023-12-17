import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Icon from '../components/Icon';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor = focused ? Colors.primary : Colors.blue;

          if (route.name === 'For You') {
            iconName = 'Home';
          } else if (route.name === 'Explore') {
            iconName = 'Explore';
          } else if (route.name === 'Library') {
            iconName = 'Library';
          } else if (route.name === 'Profile') {
            iconName = 'Profile';
          }

          return (
            <Icon
              icon={iconName}
              style={{ tintColor: iconColor }}
            />
          );
        },
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Notifications')}>
            {/* Notification button/logo */}
            <Image
              source={require('../../assets/icons/Notification.png')}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="For You" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
