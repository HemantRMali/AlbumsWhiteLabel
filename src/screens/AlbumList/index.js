import React, {useContext, useEffect} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import styles from './styles';
import {fetchAlbumList} from './actions';
import {useDispatch, useSelector} from 'react-redux';
import AlbumItem from '../../components/AlbumItem';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {UserContext} from '../../../UserContext';
import PushNotification from 'react-native-push-notification';

const AlbumList = (props) => {
  const message = useContext(UserContext);

  const dispatch = useDispatch();

  const albums = useSelector((state) => state.AlbumReducer.albums);

  useEffect(() => {
    registerNotification();
    dispatch(fetchAlbumList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerNotification = () => {
    PushNotification.configure({
      onRegister: function (object) {
        onRegistered(object.token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        onRegistrationError(err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  };

  const onRegistered = (deviceToken) => {
    Alert.alert('Registered For Remote Push', `Device Token: ${deviceToken}`, [
      {
        text: 'Dismiss',
        onPress: null,
      },
    ]);
  };

  const onRegistrationError = (error) => {
    Alert.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [
        {
          text: 'Dismiss',
          onPress: null,
        },
      ],
    );
  };

  const renderItem = ({item, index}) => (
    <AlbumItem item={item} navigation={props.navigation} />
  );

  const keyExtractor = (item) => item.id;

  console.log('albums:1', albums);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <Text>{message}</Text>
        <AlbumsButton title="Button1" /> */}
        <FlatList
          data={albums}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AlbumList;
