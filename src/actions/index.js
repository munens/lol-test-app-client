import { API_URL, GET_SUMMONER, GET_MATCH_HISTORY_DATA } from './CONSTANTS';
import axios from 'axios';

export function getSummonerData(summonerName){
	const request = axios.get(`${API_URL}/api/${summonerName}`);
	
	return (dispatch) => {
		request
			.then(({data}) => {
				console.log(data);
				dispatch({ type: GET_SUMMONER, status: 'success', error: null, payload: data });
			})
			.catch(err => {
				dispatch({ type: GET_SUMMONER, status: 'error', error: err, payload: data });
			});
	}
}

export function getMatchHistoryData(accountId, startIndex, endIndex){
	const request = axios.get(`${API_URL}/api/account/${accountId}/match-history?startIndex=${startIndex}&endIndex=${endIndex}`);
	return (dispatch) => {
		request
			.then(({data}) => {
				console.log(data);
				dispatch({ type: GET_MATCH_HISTORY_DATA, status: 'success', error: null, payload: data });
			})
			.catch(err => {
				dispatch({ type: GET_MATCH_HISTORY_DATA, status: 'error', error: err, payload: data });
			});
	}
}

