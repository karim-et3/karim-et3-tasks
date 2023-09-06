import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import cart from '../../mobx/cart';

const Product = ({product}) => {
  const addToCart = product => {
    console.log(product);
    cart.addProductToCart(product);
  };
  console.log(cart.items);
  useEffect(() => {}, [cart.items]);
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Pressable
        style={[styles.button, styles.elevation, styles.shadowProp]}
        onPress={() => addToCart(product)}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <View style={styles.descriptionContainer}>
        <Text style={styles.price}>{product.price} $</Text>
        <Text numberOfLines={2}>{product.title}</Text>
      </View>
    </View>
  );
};

export default observer(Product);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#0ea5e9',
  },
  button: {
    shadowColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 3,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#0ea5e9',
  },
  container: {
    borderWidth: 0.5,
    borderRadius: 6,
    width: 110,
    height: 190,
    paddingVertical: 8,
  },
  image: {
    width: '100%',
    height: 95,
    resizeMode: 'contain',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: -3,
    paddingHorizontal: 3,
  },
  price: {
    fontSize: 18,
    color: '#18181b',
    fontWeight: 'bold',
  },
});
