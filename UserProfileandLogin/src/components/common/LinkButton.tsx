import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useLinkProps} from '@react-navigation/native';

const LinkButton = ({to, action, children, rest}) => {
  const {onPress, ...props} = useLinkProps({to, action});

  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default LinkButton;
