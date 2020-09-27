import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import AlbumList from './src/screens/album-list';
import AlbumsDetail from './src/screens/albums-detail';

import {enableScreens} from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

const navigationOptions = {
  headerShown: false,
  header: null,
};
const App = ({params}) => {
  return (
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
  );
};

export default App;
