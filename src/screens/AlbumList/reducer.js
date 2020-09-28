/**
 * Constants
 */
import {ActionTypes} from './constants';

/* Mock Data */

// Initial Statt
const initialState = {
  loading: false,
  albums: [],
};

// Redux: Album Reducer
const AlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALBUM_LIST:
      return {...state, loading: true};

    case ActionTypes.LOAD_ALBUM_LIST:
      return {...state, loading: false, albums: action.payload.albums};

    case ActionTypes.ERROR_ALBUM_LIST:
      return {
        ...state,
        loading: false,
      };

    default: {
      return state;
    }
  }
};

// Exports
export default AlbumReducer;
