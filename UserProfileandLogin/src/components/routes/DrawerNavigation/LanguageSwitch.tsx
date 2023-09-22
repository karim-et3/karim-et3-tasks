import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {withObserverAndTheme} from '../../hoc';
import {TLanguageSwitch} from '../../../types';
import {useTranslation} from 'react-i18next';

const LanguageSwitch = ({COLORS, SIZES, FONTS}: TLanguageSwitch) => {
  const {t, i18n} = useTranslation();
  const [arabicLanguage, setArabicLanguage] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(arabicLanguage ? 'en' : 'ar');
    setArabicLanguage(prev => !prev);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        flex: 1,
        paddingHorizontal: 6,
        marginHorizontal: 10,
        paddingVertical: 10,
      }}>
      <FontAwesomeIcon icon="earth-americas" color={COLORS.test_primary3} />
      <View
        style={{
          marginLeft: 25,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: SIZES.medium,
            fontWeight: FONTS.medium,
            color: COLORS.test_primary3,
          }}>
          {arabicLanguage ? t('english') : t('arabic')}
        </Text>
        <Switch
          style={{marginLeft: 10}}
          trackColor={{false: COLORS.grey, true: '#767577'}}
          thumbColor={arabicLanguage ? COLORS.primary : '#f4f3f4'}
          value={arabicLanguage}
          onChange={() => changeLanguage()}
        />
      </View>
    </View>
  );
};

export default withObserverAndTheme(LanguageSwitch);
