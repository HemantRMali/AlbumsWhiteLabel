import React, {useEffect, useReducer} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {fetchAlbumList} from './actions';
import {useDispatch} from 'react-redux';

const AlbumList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumList());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Module <Text style={styles.accent}>Album list</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AlbumList;
