import {registerRoot, Composition, Sequence} from 'remotion';
import StarWars from './StarWars/starWars';
import Stars from './StarWars/starsBackground';
import React from 'react';

const Video = () => {
	return (
		<div>
			<Sequence from={0} durationInFrames={Infinity}>
				<Stars/>
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity}>
				<StarWars/>
			</Sequence>
		</div>
	)
}

const StarWarsVideo = () => {
	return (
		<>
			<Composition
				id='star-wars'
				component={Video}
				durationInFrames={580}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};

registerRoot(StarWarsVideo);
