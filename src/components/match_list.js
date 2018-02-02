import React, { Component } from 'react';
import Match from './match';
import NoMatches from './no_matches';

const MatchList = (props) => {
	return (
		<div className="match-list">
			{!props.matchHistory &&
				<NoMatches />
			}
			{props.matchHistory && props.matchHistory.map((match, index) => {
				return (<Match key={index} match={match} />);
			})}
		</div>
	);
}

export default MatchList;