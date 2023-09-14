import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPenNib, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const IconPage = () => {
  return (
    <View>
      <Text>IconPage</Text>
      <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faEnvelope} />
    </View>
  );
};

export default IconPage;
