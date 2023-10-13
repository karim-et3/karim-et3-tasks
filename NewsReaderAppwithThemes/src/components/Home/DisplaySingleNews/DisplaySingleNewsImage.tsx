import {Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ImageModal from './ImageModal';
import {TDisplaySingleNewsImage} from '../../../types';
import {withLiteObserver} from '../../../hoc';
import UnavailableImage from './UnavailableImage';

const DisplaySingleNewsImage = withLiteObserver(
  ({imageURL}: TDisplaySingleNewsImage) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {imageURL ? (
          <Image
            source={{uri: imageURL}}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
            }}
          />
        ) : (
          <UnavailableImage />
        )}
        {modalVisible && (
          <ImageModal setModalVisible={setModalVisible} imageURL={imageURL} />
        )}
      </TouchableOpacity>
    );
  },
);

export default DisplaySingleNewsImage;
