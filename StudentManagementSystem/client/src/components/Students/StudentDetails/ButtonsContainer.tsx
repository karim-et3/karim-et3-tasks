import {View} from 'react-native';
import React from 'react';
import SubjectsGradesButtons from './SubjectsGradesButtons';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';
import {SIZES} from '../../../styles';
import {CustomButton} from '../../../common';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

type Props = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: StackScreenProps<ParamListBase>;
  id: number;
};
const ButtonsContainer = WithThemeAndLiteObserver<Props>(props => {
  const {setModalVisible, id, navigation, theme} = props;
  const {COLORS} = theme;
  return (
    <View style={{gap: 16, marginVertical: SIZES.large}}>
      <SubjectsGradesButtons navigation={navigation} id={id} />
      <CustomButton
        text="Edit"
        textColor={COLORS.white}
        backgroundColor={COLORS.green}
        shadow="medium"
        onPress={() =>
          navigation.navigate('edit-student', {
            id,
          })
        }
      />

      <CustomButton
        text="Delete"
        textColor={COLORS.white}
        backgroundColor={COLORS.error}
        shadow="medium"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
});

export default ButtonsContainer;
