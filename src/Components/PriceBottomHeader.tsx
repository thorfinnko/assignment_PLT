import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface PriceBottomHeaderProps {
  price: number;
}

export const PriceBottomHeader = ({ price }: PriceBottomHeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <Text>Total Price to be Paid</Text>
      <Text style={styles.price}>
        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'GBP' }).format(price)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
  },
  price: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
