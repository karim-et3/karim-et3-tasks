import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../components/Home';
import Search from '../components/Search';
import {SHADOWS} from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import themeStore from '../mobx/Theme';
import {observer} from 'mobx-react-lite';

const Tab = createMaterialTopTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={({navigation, navigationState}) => (
        <View
          style={[
            SHADOWS.medium,
            {
              borderColor: themeStore.colors.grey,
              borderBottomWidth: StyleSheet.hairlineWidth,
              height: 44,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          ]}>
          <TouchableHighlight
            underlayColor={themeStore.colors.highlight}
            onPress={() => {
              themeStore.changeTheme();
              themeStore.logTheme();
            }}
            style={{
              borderBottomWidth: navigationState.index === 2 ? 1.5 : 0,
              borderColor: themeStore.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: themeStore.colors.white,
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}>
              <FontAwesomeIcon
                icon={themeStore.theme ? 'sun' : 'moon'}
                color={themeStore.colors.primary}
              />
              <Text
                style={{
                  color:
                    navigationState.index === 2
                      ? themeStore.colors.black
                      : themeStore.colors.grey,
                }}>
                {themeStore.theme ? 'Light' : 'Dark'}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={themeStore.colors.highlight}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('home')}
            style={{
              backgroundColor: themeStore.colors.white,
              borderBottomWidth: navigationState.index === 0 ? 1.5 : 0,
              borderColor: themeStore.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text
              style={{
                color:
                  navigationState.index === 0
                    ? themeStore.colors.black
                    : themeStore.colors.grey,
              }}>
              Home
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={themeStore.colors.highlight}
            onPress={() => {
              navigation.navigate('search');
            }}
            style={{
              backgroundColor: themeStore.colors.white,
              borderBottomWidth: navigationState.index === 1 ? 1.5 : 0,
              borderColor: themeStore.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text
              style={{
                color:
                  navigationState.index === 1
                    ? themeStore.colors.black
                    : themeStore.colors.grey,
              }}>
              Search
            </Text>
          </TouchableHighlight>
        </View>
      )}
      initialRouteName="home">
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
    </Tab.Navigator>
  );
};

export default observer(RootTabNavigation);
