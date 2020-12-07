import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import AlbumList from './src/screens/AlbumList';
import AlbumsDetail from './src/screens/AlbumsDetail';

import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/configureStore';
import {UserContext} from './UserContext';
enableScreens();
const Stack = createNativeStackNavigator();

const App = ({params}) => {
  return (
    <Provider store={store}>
      <UserContext.Provider value="Hello context value - some change">
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="AlbumList">
              <Stack.Screen
                name="AlbumList"
                options={{title: 'Albums'}}
                component={AlbumList}
              />
              <Stack.Screen
                name="AlbumsDetail"
                component={AlbumsDetail}
                options={{title: 'Album Details'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
