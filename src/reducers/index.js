import {combineReducers} from 'redux';

// Imports: Reducers
import AlbumReducer from '../screens/album-list/reducer';

// Redux: Root Reducer
const appReducer = combineReducers({
  AlbumReducer,
});

//export default appReducer;
export default (state, action) => appReducer(state, action);
