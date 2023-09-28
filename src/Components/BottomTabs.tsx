import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import { CartIcon, ProductListIcon } from '../../assets/icons/ProductIcons';

function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#fdbedb' },
        headerTintColor: '#fff',
        tabBarIcon: () => {
          console.log(route.name, 'route.name')
          let icon;
          if (route.name === 'Products') {
            icon =  <ProductListIcon />
          } else if (route.name === 'Cart') {
            icon = <CartIcon />;
          }
          return icon;
        },
      })}
    >
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'PRODUCTS',
          title: 'Products',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'CART',
          title: 'Cart',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
