import React, {useEffect} from 'react';
import {View, SafeAreaView, FlatList, x} from 'react-native';
import styles from './styles';
import {fetchAlbumList} from './actions';
import {useDispatch, useSelector} from 'react-redux';
import AlbumItem from '../../components/AlbumItem';
{
}
const AlbumList = (props) => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.AlbumReducer.albums);
  useEffect(() => {
    dispatch(fetchAlbumList());
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={albums}
          renderItem={({item}) => <AlbumItem item={item} />}
          keyExtractor={(item) => item.trackId}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AlbumList;
