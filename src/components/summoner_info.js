import React, { Component } from 'react';

const Summoner = (props) => {
	const summoner = props.summonerData;
	return (
		<div className="summoner-data">
			{summoner &&
				<div>
					<h1>{summoner.name}</h1>
					<h1>{summoner.summonerLevel}</h1>
				</div>
			}
		</div>
	);
}

export default Summoner;