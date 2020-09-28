import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import AlbumList from './src/screens/AlbumList';
import AlbumsDetail from './src/screens/AlbumsDetail';

import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/configureStore';
enableScreens();
const Stack = createNativeStackNavigator();

const navigationOptions = {};
const App = ({params}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="AlbumList">
            <Stack.Screen
              name="AlbumList"
              options={navigationOptions}
              component={AlbumList}
            />
            <Stack.Screen
              name="AlbumsDetail"
              component={AlbumsDetail}
              options={navigationOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
