import {View, Text, TouchableWithoutFeedback, Modal} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {WithThemeAndLiteObserver} from '../hoc/theme';

const CustomModal = ({title, onConfirm, setModalVisible, COLORS, SIZES}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                width: 300,
                height: 250,
                backgroundColor: COLORS.white,
                borderRadius: 12,
                padding: SIZES.xLarge,
              }}>
              {title}
              <View
                style={{
                  flex: 1,
                  gap: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                }}>
                <CustomButton
                  text="Cancel"
                  textColor={COLORS.white}
                  backgroundColor={COLORS.grey}
                  onPress={() => setModalVisible(false)}
                />
                <CustomButton
                  text="Yes"
                  textColor={COLORS.white}
                  backgroundColor={COLORS.error}
                  onPress={onConfirm}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default WithThemeAndLiteObserver(CustomModal);
