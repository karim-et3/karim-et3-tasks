import {View, TextInput} from 'react-native';
import React from 'react';
import searchtSore from '../../mobx/Search';
import themeStore from '../../mobx/Theme';
import {WithThemeAndLiteObserver} from '../../hoc';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SearchBar = () => {
  return (
    <View
      style={{
        borderColor: searchtSore.getSearchBarFocus
          ? themeStore.primary
          : themeStore.grey,
        borderWidth: 1,
        marginHorizontal: 12,
        borderRadius: 12,
        marginVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
      }}>
      <FontAwesomeIcon
        icon={'magnifying-glass'}
        color={
          searchtSore.getSearchBarFocus ? themeStore.primary : themeStore.grey
        }
      />
      <TextInput
        onFocus={() => searchtSore.setSearchBarFocus()}
        onBlur={() => searchtSore.setSearchBarFocus()}
        style={{color: themeStore.grey, width: '100%', paddingVertical: 6}}
        cursorColor={themeStore.primary}
        value={searchtSore.getText}
        onChangeText={text => {
          searchtSore.setText(text);
          if (searchtSore.getText) searchtSore.search(searchtSore.getText);
        }}
        placeholder={'Search'}
        placeholderTextColor={themeStore.grey}
      />
    </View>
  );
};

export default WithThemeAndLiteObserver(SearchBar);
