import {combineReducers} from 'redux';

// import all reducer
import animes from './animes';
import favourites from './favourites';
import singleAnime from './singleAnime';

const rootReducer = combineReducers({
  favourites,
  animes,
  singleAnime,
});

export default rootReducer;
