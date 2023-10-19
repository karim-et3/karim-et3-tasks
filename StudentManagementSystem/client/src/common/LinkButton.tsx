import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useLinkProps} from '@react-navigation/native';
import {To} from '@react-navigation/native/lib/typescript/src/useLinkTo';

const LinkButton = ({
  to,
  action,
  children,
  rest,
}: {
  to: To<ReactNavigation.RootParamList>;
  action?:
    | Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
      }>
    | undefined;
  children: React.ReactNode;
  rest: object | undefined;
}) => {
  const {onPress, ...props} = useLinkProps({to, action});

  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default LinkButton;
