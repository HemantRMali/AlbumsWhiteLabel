import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const AlbumItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.albumImage} source={{uri: item.artworkUrl100}} />
    </View>
  );
};

export default AlbumItem;
