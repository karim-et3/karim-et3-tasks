import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../../components/EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from '../DrawerNavigation';
import UserDetails from '../../components/UserDetails';
import ListDeleteUser from '../../components/DeleteUsers';
import Logout from '../../components/Logout';
import Login from '../../components/Login';
import adminStore from '../../mobx/Admin';
import {withObserverAndTheme} from '../../hoc';
import translationStore from '../../mobx/Translation';
import {COLORS, FONTS, SIZES} from '../../constants';

const Stack = createStackNavigator();
const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {adminStore.checkAuth ? (
          <>
            <Stack.Screen
              name="home-stack"
              component={RootDrawerNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="edit"
              component={EditProfile}
              options={{
                title: translationStore.get('profile'),
                headerTitle: () => (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: translationStore.isArabic
                        ? 'flex-end'
                        : 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontWeight: FONTS.bold,
                        color: COLORS.test_primary3,
                      }}>
                      {translationStore.get('profile')}
                    </Text>
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="user-details"
              component={UserDetails}
              options={{
                headerTitle: () => (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: translationStore.isArabic
                        ? 'flex-end'
                        : 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontWeight: FONTS.bold,
                        color: COLORS.test_primary3,
                      }}>
                      {translationStore.get('profile')}
                    </Text>
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="delete-user"
              component={ListDeleteUser}
              options={{
                title: translationStore.get('deleter'),
                headerTitle: () => (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: translationStore.isArabic
                        ? 'flex-end'
                        : 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontWeight: FONTS.bold,
                        color: COLORS.test_primary3,
                      }}>
                      {translationStore.get('users-profile')}
                    </Text>
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="logout"
              component={Logout}
              options={{
                header: () => null,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              header: () => null,
              animationTypeForReplace: 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withObserverAndTheme(RootStackNavigation);
