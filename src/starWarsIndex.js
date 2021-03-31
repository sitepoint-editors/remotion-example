import React, { useState, useEffect } from 'react';
import {registerRoot, Composition, Sequence} from 'remotion';
import { LoremIpsum } from 'lorem-ipsum';

import StarWars from './StarWars/starWars';
import Stars from './StarWars/starsBackground';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const Video = ({ textBlocks }) => {
  return (
    <div>
      <Sequence from={0} durationInFrames={Infinity}>
        <Stars/>
      </Sequence>
      <Sequence from={0} durationInFrames={Infinity}>
        <StarWars
          textBlocks={textBlocks}
        />
      </Sequence>
    </div>
  )
}

const StarWarsVideo = () => {

  const [textBlocks, setTextBlocks] = useState([]);

  useEffect(() => {
    setTextBlocks([
      lorem.generateSentences(5),
      lorem.generateSentences(5),
      lorem.generateSentences(5),
    ])
  }, [])
  return (
    <>
      <Composition
        id='star-wars'
        component={Video}
        durationInFrames={580}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ textBlocks }}
      />
    </>
  );
};

registerRoot(StarWarsVideo);
