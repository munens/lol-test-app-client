import React, { Component } from 'react';

const ProfileDetails = (props) => {
	return (
		<div className="profile-details">
			<h1>{props.summoner.name}</h1>
			<h1>{props.summoner.summonerLevel}</h1>
		</div>
	);
}

export default ProfileDetails;