import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PriceBottomHeader } from '../Components/PriceBottomHeader';
import { CartCard } from '../Components/CartCard';

function Cart() {
  const { products } = useSelector((state) => state.cart);
  if (products.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          renderItem={({ item }) => <CartCard item={item} />}
          data={products}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        />
        <View style={{ position: 'absolute', bottom: 0, width: Dimensions.get('screen').width }}>
          <PriceBottomHeader
            price={products.reduce((a, b) => {
              return a + b?.price;
            }, 0) || 0}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>No Product Added to cart</Text>
    </View>
  )

}

export default Cart;
