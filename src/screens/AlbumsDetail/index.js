import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';

const renderTitleSubtitle = (title, subtitle) => {
  return (
    <Text style={styles.title}>
      {title} <Text style={styles.subtitle}>{subtitle}</Text>
    </Text>
  );
};

const AlbumsDetail = (props) => {
  //console.log('props:', props.route.params.album);
  const album = props.route.params.album;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <Image
            source={{
              uri: album.artworkUrl100,
            }}
            style={styles.albumImage}
          />
          <View style={styles.detailsContainer}>
            {renderTitleSubtitle('Artist Name:', album.artistName)}
            {renderTitleSubtitle('Track Name:', album.trackName)}
            {renderTitleSubtitle('Collection Name:', album.collectionName)}
            {renderTitleSubtitle(
              'Collection Price:',
              `${album.currency} ${album.collectionPrice}`,
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AlbumsDetail;
