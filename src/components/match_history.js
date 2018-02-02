import React, { Component } from 'react';
import MatchList from './match_list';
import SpinningCircle from './spinning_circle';

const MatchHistory = (props) => {
	return (
		<div className="match-history">
			{props.loading_status ? <SpinningCircle /> : <MatchList matchHistory={props.matchHistory} />}
		</div>
	);
}

export default MatchHistory;