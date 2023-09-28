import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/reducers/products';
import { ProductCard } from '../Components/ProductCard';
import { Product } from '../Typings/Products';

function Products(): JSX.Element {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch the fetchProducts action
    dispatch(fetchProducts());
  }, [dispatch]); // Include dispatch as a dependency

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  // Render the products once they are loaded
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        renderItem={({ item }) => <ProductCard item={item} />}
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      />
    </View>
  );
}

export default Products;
