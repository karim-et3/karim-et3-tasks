import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../../components/EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from '../DrawerNavigation';
import UserDetails from '../../components/UserDetails';
import ListDeleteUser from '../../components/DeleteUsers';
import Logout from '../../components/Logout';
import i18n from '../../mobx/i18n';
import Login from '../../components/Login';
import adminStore from '../../mobx/Admin';
import {observer} from 'mobx-react-lite';
import {withObserverAndTheme} from '../../hoc';

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
              options={{title: i18n.get('profile')}}
            />
            <Stack.Screen name="user-details" component={UserDetails} />
            <Stack.Screen
              name="delete-user"
              component={ListDeleteUser}
              options={{title: i18n.get('deleter')}}
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
