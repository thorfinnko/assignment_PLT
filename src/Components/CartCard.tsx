import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../Typings/Products';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/reducers/cart';

interface CartCardProps {
  item: Product;
}

export const CartCard = ({ item }: CartCardProps) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  return (
    <View style={styles.cardContainer}>
      <FastImage
        style={{ width: Dimensions.get('screen').width / 2, height: 300 }}
        source={{
          uri: item.img,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Text style={styles.description}>{item.name}</Text>
      <Text style={styles.price}>
        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'GBP' }).format(item.price)}
      </Text>
      <Text style={styles.price}>{item.colour}</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.addToCartButton}
        onPress={() => dispatch(removeFromCart(item))}
      >
        <Text style={{ fontSize: 12, color: 'white' }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: Dimensions.get('screen').width / 2,
    backgroundColor: 'white',
  },
  description: {
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 14,
    color: '#979797',
  },
  price: {
    fontSize: 14,
    color: '#333',
    paddingLeft: 10,
  },
  availableColor: {
    width: 15,
    height: 15,
    marginTop: 6,
    marginLeft: 10,
    borderRadius: 7,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#fdbedb',
    borderRadius: 4,
    padding: 4,
  },
});
