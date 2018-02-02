import { combineReducers } from 'redux';
import summonerReducer from './summoner_reducer';
import matchHistoryReducer from './match_history_reducer';

const rootReducer = combineReducers({
  summonerData: summonerReducer,
  matchHistory: matchHistoryReducer,
});

export default rootReducer;
