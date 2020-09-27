import {ActionTypes} from './constants';
/**
 * This action creator is used for fetching album list from server.
 */
export const fetchAlbumList = () => ({
  type: ActionTypes.FETCH_ALBUM_LIST,
  payload: {},
});
