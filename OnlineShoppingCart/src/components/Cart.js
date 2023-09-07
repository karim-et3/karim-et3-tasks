import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import cart from '../../mobx/cart';
import {observer} from 'mobx-react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Cart = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      {console.log(cart.items.length)}
      {cart.items.length !== 0 ? (
        cart.items.map(item => (
          <View
            style={{
              marginVertical: 10,
              borderBottomWidth: 1,
              paddingVertical: 20,
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              gap: 8,
              alignItems: 'flex-start',
            }}
            key={item.id}>
            <Image
              style={{
                width: '25%',
                backgroundColor: 'white',
                height: 80,
                resizeMode: 'cover',
                borderRadius: 8,
              }}
              source={item.image}
            />
            <View
              style={{
                width: '60%',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 24, fontWeight: '800'}}>
                {item.price} $
              </Text>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#52525b'}}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  padding: 8,
                  fontWeight: '500',
                  borderRadius: 4,
                  backgroundColor: 'white',
                }}>
                {item.quantity}
              </Text>
              <Pressable onPress={() => cart.deleteProduct(item)}>
                <MaterialIcons
                  name="delete"
                  style={{fontSize: 32, color: '#f43f5e'}}
                />
              </Pressable>
            </View>
          </View>
        ))
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>Cart is empty</Text>
        </View>
      )}
    </View>
  );
};

export default observer(Cart);

const styles = StyleSheet.create({});
