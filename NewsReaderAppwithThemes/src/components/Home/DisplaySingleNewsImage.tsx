import {Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ImageModal from './ImageModal';
import {TDisplaySingleNewsImage} from '../../types';
import {withLiteObserver} from '../hoc';

const DisplaySingleNewsImage = ({imageURL}: TDisplaySingleNewsImage) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        source={{uri: imageURL}}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
        }}
      />
      {modalVisible && (
        <ImageModal setModalVisible={setModalVisible} imageURL={imageURL} />
      )}
    </TouchableOpacity>
  );
};

export default withLiteObserver(DisplaySingleNewsImage);
