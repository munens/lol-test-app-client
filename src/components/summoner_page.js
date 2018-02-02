import React, { Component } from 'react';
import SummonerInfo from './summoner_info';
import MatchHistory from './match_history';

const SummonerPage = (props) => {
	return (
		<div className="summoner-page">
			<SummonerInfo 
				summonerData={props.summonerData}
			/>
			<MatchHistory 
				matchHistory={props.matchHistory}
			/>
		</div>
	);
}

export default SummonerPage;
