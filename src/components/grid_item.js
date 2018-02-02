import React, { Component } from 'react';

const GridItem = (props) => {
	const IMG_URL = `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/${props.type}/`;
	return (
		<div className="grid-item">
			<img className="photo" src={`${IMG_URL}${props.item.image.full}`} />
			<p className="photo-desc">{props.item.name}</p>
		</div>
	);
}

export default GridItem;