import React, { Component } from 'react';

const Profile = (props) => {
	const IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/';
	return (
		<div className="profile">
			<img className="profile-photo" src={`${IMG_URL}${props.iconId}.png`} />
		</div>
	);
}

export default Profile;