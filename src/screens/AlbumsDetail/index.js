import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import Player from '../../components/Player';
import {useSelector} from 'react-redux';

const renderTitleSubtitle = (title, subtitle) => {
  return (
    <Text style={styles.title}>
      {title} <Text style={styles.subtitle}>{subtitle}</Text>
    </Text>
  );
};

const AlbumsDetail = (props) => {
  const playbackState = usePlaybackState();

  const albums = useSelector((state) => state.AlbumReducer.albums);
  const album = props.route.params.album;
  //console.log('props:', props.route.params.album);
  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log('currentTrack:', currentTrack);
    console.log('albums:', albums);
    if (currentTrack) {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
      //await TrackPlayer.play();
    } else {
      await TrackPlayer.reset();
      await TrackPlayer.add(albums);
      await TrackPlayer.add({
        id: album.id,
        url: album.url,
        title: album.title,
        artist: album.artist,
        artwork: album.artwork,
      });
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          {/* <Image
            source={{
              uri: album.artwork,
            }}
            style={styles.albumImage}
          /> */}
          <View style={styles.playerContainer}>
            <Player
              onNext={skipToNext}
              style={styles.player}
              onPrevious={skipToPrevious}
              onTogglePlayback={togglePlayback}
            />
            <Text style={styles.state}>{getStateName(playbackState)}</Text>
            <View style={styles.detailsContainer}>
              {renderTitleSubtitle('Artist Name:', album.artist)}
              {renderTitleSubtitle('Track Name:', album.title)}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}
async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}
export default AlbumsDetail;
