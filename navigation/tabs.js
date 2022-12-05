import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

import {Home, Account, Search, Add, Message} from '../src/tabScreens';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -25,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <LinearGradient
        colors={[COLORS.yellow_500, COLORS.yellow_500]}
        style={{
          width: 45,
          height: 45,
          borderRadius: 35,
        }}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      // sceneContainerStyle={{backgroundColor: 'red'}}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.rose_600,
          borderTopColor: 'transparent',
          height: 100,
        },
        tabBarStyle: {
          backgroundColor: '#650606',
          paddingHorizontal: 5,
          height: 55,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#936161' : null,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 12,
              }}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  height: focused ? 12 : 18,
                  width: focused ? 12 : 18,
                  tintColor: focused ? COLORS.white : COLORS.gray2,
                  right: 3,
                }}
              />
              {focused ? (
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.black,
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  HOME
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#936161' : null,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 12,
              }}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  height: focused ? 12 : 18,
                  width: focused ? 12 : 18,
                  tintColor: focused ? COLORS.white : COLORS.gray2,
                  right: 5,
                }}
              />
              {focused ? (
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.black,
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  SEARCH
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Add}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.plus}
              resizeMode="contain"
              style={{
                height: 22,
                width: 22,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#936161' : null,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 12,
              }}>
              <Image
                source={icons.message}
                resizeMode="contain"
                style={{
                  height: focused ? 12 : 18,
                  width: focused ? 12 : 18,
                  tintColor: focused ? COLORS.white : COLORS.gray2,
                  right: 5,
                }}
              />
              {focused ? (
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.black,
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  MESSAGE
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#936161' : null,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 12,
              }}>
              <Image
                source={icons.account}
                resizeMode="contain"
                style={{
                  height: focused ? 12 : 18,
                  width: focused ? 12 : 18,
                  tintColor: focused ? COLORS.white : COLORS.gray2,
                  right: 5,
                }}
              />
              {focused ? (
                <Text
                  style={{
                    color: focused ? COLORS.white : COLORS.black,
                    fontSize: 10,
                    fontWeight: '500',
                  }}>
                  ACCOUNT
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.39,
    shadowRadius: 4.65,
    elevation: 15,
  },
});
export default Tabs;
