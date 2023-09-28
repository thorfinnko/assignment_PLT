import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BottomTabs from './src/Components/BottomTabs';
import { Provider } from 'react-redux';
import { store } from './src/store';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}


export default App;
