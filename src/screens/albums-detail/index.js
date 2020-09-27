import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AlbumsDetail = ({params}) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Module <Text style={styles.accent}>Albums detail</Text>
    </Text>
  </View>
);

export default AlbumsDetail;
