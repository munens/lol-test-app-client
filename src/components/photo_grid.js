import React, { Component } from 'react';
import GridItem from './grid_item';

const PhotoGrid = (props) => {
	return (
		<div className="photo-grid">
			{props.items && props.items.map((item, index) => {
				if(item){
					return (<GridItem key={index} item={item} type={props.type} />);
				}		
			})}
		</div>
	);
}

export default PhotoGrid;