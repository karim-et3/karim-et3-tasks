import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ListDeleteUser from '../ListDeleteUser';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Test = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="delete-user-stack"
        component={ListDeleteUser}
        options={({navigation}) => ({
          title: 'Deleter',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 12}}
              onPress={() => navigation.goBack()}>
              <FontAwesomeIcon size={18} icon="fa-solid fa-arrow-left" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Test;
