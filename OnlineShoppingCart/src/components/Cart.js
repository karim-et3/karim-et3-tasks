import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import cart from '../../mobx/cart';
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
              flexDirection: 'row',
              gap: 8,
              alignItems: 'flex-start',
            }}
            key={item.id}>
            <Image
              style={{
                width: 80,
                backgroundColor: 'white',
                height: 80,
                resizeMode: 'cover',
              }}
              source={item.image}
            />
            <View style={{display: 'flex', justifyContent: 'center'}}>
              <Text style={{fontSize: 24, fontWeight: '800'}}>
                {item.price} $
              </Text>
              <Text style={{fontSize: 24, fontWeight: '600'}}>
                {item.title}
              </Text>
            </View>
            <Pressable
              style={{alignSelf: 'center'}}
              onPress={() => console.log('delete item', item.id)}>
              <MaterialIcons
                name="delete"
                style={{fontSize: 32, color: '#f43f5e'}}
              />
            </Pressable>
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

export default Cart;

const styles = StyleSheet.create({});
