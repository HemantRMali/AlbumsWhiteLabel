import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const AlbumItem = (props) => {
  console.log('props:', props);
  const album = props.item;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          props.navigation
            ? props.navigation.navigate('AlbumsDetail', {album})
            : null;
        }}>
        <Image style={styles.albumImage} source={{uri: album.artworkUrl100}} />
      </TouchableOpacity>
    </View>
  );
};

export default AlbumItem;
