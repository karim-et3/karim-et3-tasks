import React from 'react';
import EditProfile from '../../EditProfile';

const Edit = ({Stack}) => {
  return (
    <Stack.Screen
      name="edit"
      component={EditProfile}
      options={{title: 'Profile'}}
    />
  );
};

export default Edit;
