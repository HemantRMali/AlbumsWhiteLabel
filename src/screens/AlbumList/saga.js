/**
 * Redux-Saga Effects
 */
import {takeLatest, put} from 'redux-saga/effects';
import {millisToSeconds} from '../../methods';

/**
 * API Manager
 */
import {request} from '../../services';

/**
 * Constants
 */
import {GET_ALBUMS_URL} from '../../services/api-end-points';

import {ActionTypes} from './constants';
/**
 * This generator function is used for call api to get album list from server.
 * @author
 */
function* fetchAlbumList(action) {
  try {
    //console.log('fetchAlbumList:', action);
    const {response} = yield request({url: GET_ALBUMS_URL, httpMethod: 'GET'});
    //console.log('response:', response);
    const list = response.data;
    //console.log(':list:', list);

    const albumList = [];
    list.results.forEach((mItem, index) => {
      const track = {
        id: String(mItem.trackId),
        url: mItem.previewUrl,
        title: mItem.trackName,
        artist: mItem.artistName,
        artwork: mItem.artworkUrl100,
        duration: millisToSeconds(mItem.trackTimeMillis),
      };
      albumList.push(track);
    });

    yield put({
      type: ActionTypes.LOAD_ALBUM_LIST,
      payload: {albums: albumList},
    });
  } catch (error) {
    yield put({type: ActionTypes.ERROR_ALBUM_LIST, payload: error});
  }
}

/**
 * This generator function is used as watcher for GET_ALBUMS_URL action.
 * @author
 * @export
 */
export function* fetchAlbumListWatcher() {
  yield takeLatest(ActionTypes.FETCH_ALBUM_LIST, fetchAlbumList);
}
