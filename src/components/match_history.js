import React, { Component } from 'react';
import Match from './match';

const MatchHistory = (props) => {
	console.log(props.matchHistory)
	return (
		<div className="match-history">
			{props.matchHistory && props.matchHistory.map((match, index) => {
				return (<Match key={index} match={match} />);
			})}
		</div>
	);
}

export default MatchHistory;