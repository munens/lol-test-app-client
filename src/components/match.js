import React, { Component } from 'react';

const Match = (props) => {
	const match = props.match;
	return (
		<div className="match">
			{match &&
				<div className="outcome">
					{match.outcome}
				</div>
			}
		</div>
	);
}

export default Match;