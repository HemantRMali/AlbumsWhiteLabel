import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const AlbumList = ({params}) => {
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
