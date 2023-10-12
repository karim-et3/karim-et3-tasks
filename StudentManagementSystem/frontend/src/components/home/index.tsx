import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CountBox from './CountBox';
import {SIZES} from '../../styles';

const Home = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 16,
        rowGap: 8,
        marginHorizontal: 60,
        flexWrap: 'wrap',
      }}>
      <CountBox icon="users" count={60} />
      <CountBox icon="folder-tree" count={12} />
      <CountBox icon="table-list" count={1230} />
    </View>
  );
};

export default Home;
