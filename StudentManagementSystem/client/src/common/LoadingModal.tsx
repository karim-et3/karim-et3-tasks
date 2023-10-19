import {View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';

type Props = {};
const LoadingModal = WithThemeAndLiteObserver<Props>(props => {
  const {COLORS} = props.theme;
  return (
    <Modal animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}>
        <ActivityIndicator size={44} color={COLORS.primary} />
      </View>
    </Modal>
  );
});

export default LoadingModal;
