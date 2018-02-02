import React, { Component } from 'react';
import PhotoGrid from './photo_grid';

const Match = (props) => {
	const match = props.match;
	return (
		<div className="match">
			{match &&
				<div>
					<div className="outcome">
						outcome: {match.outcome ? 'Win' : 'lose'}
					</div>
					<div>
						game length: {match.game_length}
					</div>
					{/* {match.champion &&
						<div>
							Champion: {match.champion.name} {match.champion.title}
						</div>
					} */}
					
					<div>
						Kills: {match.kda.kills}, Deaths: {match.kda.deaths}, Assists: {match.kda.assists}
					</div>
					<div>
						level: {match.level}
					</div>
					<div>
						items bought: 
						<br/>
						<PhotoGrid items={match.items} type={'item'} />
					</div>
						spells: 
						<br/>
						<PhotoGrid items={match.spells} type={'spell'} />
					<div>
						creep score: {match.totalCreepScore}
					</div>
					<div>
						avg. creep score: {match.averageCreepScore }
					</div>
				</div>
			}
		</div>
	);
}

export default Match;