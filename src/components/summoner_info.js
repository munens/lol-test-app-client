import React, { Component } from 'react';
import Profile from './profile';
import ProfileDetails from './profile_details';

const Summoner = (props) => {
	const summoner = props.summonerData;
	return (
		<div className="summoner-data">
			{summoner &&
				<div className="summoner">
					<Profile iconId={summoner.profileIconId} />
					<ProfileDetails summoner={summoner} />
				</div>
			}
		</div>
	);
}

export default Summoner;