import { API_URL, GET_SUMMONER, GET_MATCH_HISTORY_DATA, RESET_SUMMONER_STATUS, RESET_MATCH_HISTORY_STATUS } from './CONSTANTS';
import axios from 'axios';

export function getSummonerData(summonerName){
	const request = axios.get(`${API_URL}/api/summoner/${summonerName}`);
	
	return (dispatch) => {
		request
			.then(({data}) => {
				dispatch({ type: GET_SUMMONER, status: 'success', error: null, payload: data });
			})
			.catch(err => {
				dispatch({ type: GET_SUMMONER, status: 'error', error: err, payload: null });
			});
	}
}

export function getMatchHistoryData(accountId, startIndex, endIndex){
	const request = axios.get(`${API_URL}/api/account/${accountId}/match-history?startIndex=${startIndex}&endIndex=${endIndex}`);
	return (dispatch) => {
		request
			.then(({data}) => {
				dispatch({ type: GET_MATCH_HISTORY_DATA, status: 'success', error: null, payload: data });
			})
			.catch(err => {
				console.log(err)
				dispatch({ type: GET_MATCH_HISTORY_DATA, status: 'error', error: err, payload: null });
			});
	}
}

export function resetSummonerStatus(){
	return {
		type: RESET_SUMMONER_STATUS
	}
}

export function resetMatchHistoryStatus(){
	return {
		type: RESET_MATCH_HISTORY_STATUS
	}
}

