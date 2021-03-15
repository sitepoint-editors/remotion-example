import React from 'react';

import './starwars.css';
import {spring, useCurrentFrame} from 'remotion';

const StarWars:React.FC<{
	textBlocks: string[];
}> = ({ textBlocks }) => {
	const frame = useCurrentFrame()

	const fps = 6000;

	const top = spring({
		frame,
		from: 0,
		to: -6000,
		fps,
	})

	const rotate = spring({
		frame,
		from: 20,
		to: 25,
		fps,
	})

	const translateZ = spring({
		frame,
		from: 0,
		to: -2500,
		fps,
	})

	return (
		<>
			<div className="fade"/>

			<section className="star-wars">

				<div
					className="crawl"
					style={{
						top: `${top}px`,
						transform: `rotateX(${rotate}deg) translateZ(${translateZ}px)`
					}}
				>

					<div className="title">
						<p>Episode IV</p>
						<h1>A New Hope</h1>
					</div>
					{
						textBlocks.map((block: string, index: number) => {
							return (
								<p key={index}>{block}</p>
							)
						})
					}
					{/*<p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory*/}
					{/*	against the evil Galactic Empire.*/}
					{/*</p>*/}
					{/*<p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH*/}
					{/*	STAR, an armored space station with enough power to destroy an entire planet.*/}
					{/*</p>*/}
					{/*<p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the*/}
					{/*	stolen plans that can save her people and restore freedom to the galaxy…*/}
					{/*</p>*/}

				</div>

			</section>
		</>
	)
}

export default StarWars;
