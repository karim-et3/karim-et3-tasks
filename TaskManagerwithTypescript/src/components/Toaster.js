import {View, Text, Pressable} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Toaster = ({error, state, title, body, icon}) => {
  const closeToast = () => state(false);
  return (
    <>
      {state && (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutUp}
          duration={8000}
          style={{
            borderLeftColor: error ? '#e74c3c' : '#2f8147',
            borderLeftWidth: 8,
            top: 20,
            width: '90%',
            borderRadius: 5,
            position: 'absolute',
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOpacity: 0.4,
            shadowOffset: {width: 0, height: 1},
            elevation: 2,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              {(title || icon) && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Text
                    style={[
                      {
                        marginRight: 8,
                        fontWeight: '500',
                      },
                    ]}>
                    {title}
                  </Text>
                  {icon}
                </View>
              )}
              {body && (
                <Text>
                  <Text>{body}</Text>
                </Text>
              )}
            </View>
            <Pressable hitSlop={10} onPressIn={closeToast}>
              <MaterialIcons
                size={18}
                style={{textAlign: 'right'}}
                name="close"
              />
            </Pressable>
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default Toaster;
