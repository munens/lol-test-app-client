import { GET_MATCH_HISTORY_DATA } from '../actions/CONSTANTS';

export default function(state = {}, action){
	switch(action.type){
		case GET_MATCH_HISTORY_DATA:
			return action.payload
		default:
			return state;
	}
}