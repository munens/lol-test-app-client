import { GET_MATCH_HISTORY_DATA, RESET_MATCH_HISTORY_STATUS } from '../actions/CONSTANTS';

const INITIAL_STATUS = { status: null, matchHistory: null }
export default function(state = INITIAL_STATUS, action){
	switch(action.type){
		case GET_MATCH_HISTORY_DATA:
			return { ...state, status: action.status, matchHistory: action.payload };
		case RESET_MATCH_HISTORY_STATUS:
			return { ...state, status: null };
		default:
			return state;
	}
}