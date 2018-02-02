import React, { Component } from 'react';
import SummonerInfo from './summoner_info';
import MatchHistory from './match_history';

class SummonerPage extends Component {

	componentWillMount() {}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {

	}

	componentWillUpdate(nextProps, nextState) {
		
	}

	render() {
		return (
			<div className="summoner-page">
				<SummonerInfo 
					
				/>
				<MatchHistory 
				
				/>
			</div>
		);
	}
}
