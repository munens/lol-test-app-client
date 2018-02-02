import { GET_SUMMONER } from '../actions/CONSTANTS';

export default function(state = {}, action){
	switch(action.type){
		case GET_SUMMONER:
			return action.payload;
		default:
			return state;
	}
}