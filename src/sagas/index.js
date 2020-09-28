import {all} from 'redux-saga/effects';

// Imports: Redux Sagas

import {fetchAlbumListWatcher} from '../screens/AlbumList/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fetchAlbumListWatcher()]);
}
