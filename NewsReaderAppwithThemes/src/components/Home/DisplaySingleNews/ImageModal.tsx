import {View, Image, Modal, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {TImageModal} from '../../../types';
import {withLiteObserver} from '../../../hoc';

const ImageModal = ({setModalVisible, imageURL}: TImageModal) => (
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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <TouchableWithoutFeedback>
          <Image
            source={{uri: imageURL}}
            style={{
              width: 300,
              height: 300,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

export default withLiteObserver(ImageModal);
