import React from 'react';

import './starwars.css';
import {spring, useCurrentFrame} from 'remotion';

const StarWars = ({ textBlocks }) => {
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
            textBlocks.map((block, index) => {
              return (
                <p key={index}>{block}</p>
              )
            })
          }
        </div>

      </section>
    </>
  );
}

export default StarWars;
