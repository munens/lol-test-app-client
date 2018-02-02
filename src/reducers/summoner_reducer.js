import { GET_SUMMONER, RESET_SUMMONER_STATUS } from '../actions/CONSTANTS';

const INITIAL_STATUS = { status: null, summonerData: null }
export default function(state = INITIAL_STATUS, action){
	switch(action.type){
		case GET_SUMMONER:
			return { ...state, status: action.status, summonerData: action.payload };
		case RESET_SUMMONER_STATUS:
			return { ...state, status: null };
		default:
			return state;
	}
}