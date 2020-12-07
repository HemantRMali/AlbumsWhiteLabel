import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const AlbumItem = (props) => {
  //console.log('AlbumItem:');
  const album = props.item;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation
            ? props.navigation.navigate('AlbumsDetail', {album})
            : null;
        }}>
        <Image style={styles.albumImage} source={{uri: album.artwork}} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(AlbumItem);
