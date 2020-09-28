import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
  },
  albumImage: {
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  scrollViewContentContainerStyle: {flexGrow: 1},
  title: {fontSize: 20, fontWeight: '700', marginBottom: 10},
  subtitle: {fontWeight: '500'},
  detailsContainer: {
    margin: 20,
  },
});
