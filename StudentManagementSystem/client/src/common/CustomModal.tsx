import {View, TouchableWithoutFeedback, Modal} from 'react-native';
import React, {ReactNode} from 'react';
import CustomButton from './CustomButton';
import {WithThemeAndLiteObserver} from '../hoc/theme';

type Props = {
  title: ReactNode;
  buttonOneText: string;
  buttonOneStyle: {backgroundColor: string; color: string};
  buttonOneOnPress: () => void;
  buttonTwoText?: string;
  buttonTwoStyle?: {backgroundColor: string; color: string};
  buttonTwoOnPress?: () => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomModal = WithThemeAndLiteObserver<Props>(props => {
  const {
    title,
    buttonOneText,
    buttonOneStyle,
    buttonOneOnPress,
    buttonTwoText,
    buttonTwoStyle,
    buttonTwoOnPress,
    setModalVisible,
    theme,
  } = props;
  const {COLORS, SIZES} = theme;
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
              <View style={{flex: 1}}>{title}</View>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                }}>
                <CustomButton
                  text={buttonOneText.toUpperCase()}
                  textColor={buttonOneStyle.color}
                  backgroundColor={buttonOneStyle.backgroundColor}
                  onPress={buttonOneOnPress}
                  shadow="small"
                />
                {buttonTwoText && buttonTwoOnPress && buttonTwoStyle && (
                  <CustomButton
                    text={buttonTwoText.toUpperCase()}
                    textColor={buttonTwoStyle.color}
                    backgroundColor={buttonTwoStyle.backgroundColor}
                    onPress={buttonTwoOnPress}
                    shadow="small"
                  />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default CustomModal;
